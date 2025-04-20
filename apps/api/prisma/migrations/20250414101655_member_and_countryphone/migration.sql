-- AlterTable
ALTER TABLE "Country_phone" ALTER COLUMN "deletedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "members" ALTER COLUMN "deletedAt" DROP NOT NULL;
