/*
  Warnings:

  - Made the column `organizerName` on table `events` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_creatorId_fkey";

-- AlterTable
ALTER TABLE "events" ALTER COLUMN "creatorId" DROP NOT NULL,
ALTER COLUMN "organizerName" SET NOT NULL,
ALTER COLUMN "ticketTermsAndCondition" DROP NOT NULL,
ALTER COLUMN "eventTag" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "creator_profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
