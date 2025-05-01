import { prisma } from '../src/prisma';
import { countryCodes } from './seedData/countries';
import { eventFormats, eventTopics } from './seedData/eventType';


class DatabaseSeeder {
  private async seedCountryPhones() {
    console.log('🌱 Seeding country phones...');
    console.log(`Total countries in data: ${countryCodes.length}`);
          
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

  private async seedEventCategories() {
    console.log('🌱 Seeding event categories...');

    console.log(`Total event formats in data: ${eventFormats.length}`);

    let successFormatCount = 0;
    for (const format of eventFormats) {
      try {
        await prisma.eventFormat.upsert({
          where: { id: eventFormats.indexOf(format) },
          update: {},
          create: {
            formatName: format,
          },
        });
        successFormatCount++;
      } catch (error) {
        console.error(`Failed to seed event_formats: ${format}`, error);
      }
    }
    console.log(
      `Successfully seeded ${successFormatCount} formats from total formats in data: ${eventFormats.length}`,
    );

    console.log(`Total event topics in data: ${eventTopics.length}`);

    let successTopicCount = 0;
    for (const topic of eventTopics) {
      try {
        await prisma.eventTopic.upsert({
          where: { id: eventTopics.indexOf(topic) },
          update: {},
          create: {
            topicName: topic,
          },
        });
        successTopicCount++;
      } catch (error) {
        console.error(`Failed to seed event_topics: ${topic}`, error);
      }
    }
    console.log(
      `Successfully seeded ${successTopicCount} topics from total topics in data: ${eventTopics.length}`,
    );

    console.log('🪴 Seeding event categories finished');
  }

  public async seedAll() {
    try {
      console.log('🌱 Seeding models to database...');
      await this.seedCountryPhones();
      await this.seedEventCategories();
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
