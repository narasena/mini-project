/*
  Warnings:

  - You are about to drop the column `eventCountryPhoneId` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `eventDate` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `eventTime` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `ticketDataFormType` on the `events` table. All the data in the column will be lost.
  - Added the required column `eventCPCountryPhoneId` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventCPPhone` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventEndDate` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventEndTime` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventStartDate` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventStartTime` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventTag` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TicketIDCard" AS ENUM ('NO_ID', 'WITH_ID');

-- DropForeignKey
ALTER TABLE "creator_profile" DROP CONSTRAINT "creator_profile_countryPhoneId_fkey";

-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_eventCountryPhoneId_fkey";

-- AlterTable
ALTER TABLE "creator_profile" ALTER COLUMN "countryPhoneId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "events" DROP COLUMN "eventCountryPhoneId",
DROP COLUMN "eventDate",
DROP COLUMN "eventTime",
DROP COLUMN "ticketDataFormType",
ADD COLUMN     "bannerImgUrl" TEXT,
ADD COLUMN     "eventCPCountryPhoneId" INTEGER NOT NULL,
ADD COLUMN     "eventCPPhone" TEXT NOT NULL,
ADD COLUMN     "eventEndDate" TEXT NOT NULL,
ADD COLUMN     "eventEndTime" TEXT NOT NULL,
ADD COLUMN     "eventStartDate" TEXT NOT NULL,
ADD COLUMN     "eventStartTime" TEXT NOT NULL,
ADD COLUMN     "eventTag" TEXT NOT NULL,
ADD COLUMN     "idCardStatus" "TicketIDCard" NOT NULL DEFAULT 'NO_ID',
ADD COLUMN     "isPrivateEvent" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "ticketStartDate" SET DATA TYPE TEXT,
ALTER COLUMN "ticketEndDate" SET DATA TYPE TEXT;

-- DropEnum
DROP TYPE "TicketDataFormType";

-- AddForeignKey
ALTER TABLE "creator_profile" ADD CONSTRAINT "creator_profile_countryPhoneId_fkey" FOREIGN KEY ("countryPhoneId") REFERENCES "country_phone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_eventCPCountryPhoneId_fkey" FOREIGN KEY ("eventCPCountryPhoneId") REFERENCES "country_phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
