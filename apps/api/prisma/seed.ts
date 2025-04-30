import { prisma } from '../src/prisma';
import { countryCodes } from './seedData/countries';


class DatabaseSeeder {
  private async seedCountryPhones() {
    console.log('🌱 Seeding country phones...');
    console.log(`Total countries in data: ${countryCodes.length}`);
    
    await prisma.countryPhone.deleteMany();
      
      let successCount = 0
    for (const country of countryCodes) {
      try {
        await prisma.countryPhone.upsert({
          where: { code: country.code },
          update: {},
          create: {
            code: country.code,
            name: country.name,
            mobileCode: country.mobileCode,
          },
        });
          successCount++
      } catch (error) {
        console.error(`Failed to seed country: ${country.name}`, error);
      }
    }
    console.log(`Successfully seeded ${successCount} countries from total countries in data: ${countryCodes.length}`);
    console.log('🪴 Seeding country phones finished');
  }

  public async seedAll() {
    try {
      console.log('🌱 Seeding models to database...');
      await this.seedCountryPhones();
      console.log('🪴 Seeding models to database finished');
    } catch (error) {
      console.error('❌ Error seeding database:', error);
      throw error;
    }
  }
}

async function main() {
  const seeder = new DatabaseSeeder();

  await seeder.seedAll();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
