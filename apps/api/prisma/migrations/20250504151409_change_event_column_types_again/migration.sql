/*
  Warnings:

  - Made the column `creatorId` on table `events` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_creatorId_fkey";

-- AlterTable
ALTER TABLE "events" ALTER COLUMN "creatorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "creator_profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
