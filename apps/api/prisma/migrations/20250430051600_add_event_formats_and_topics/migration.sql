/*
  Warnings:

  - You are about to drop the column `eventCategoryId` on the `events` table. All the data in the column will be lost.
  - Added the required column `eventFormatId` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" DROP COLUMN "eventCategoryId",
ADD COLUMN     "eventFormatId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "event_formats" (
    "id" SERIAL NOT NULL,
    "formatName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "event_formats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_topics" (
    "id" SERIAL NOT NULL,
    "topicName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "event_topics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_eventFormatId_fkey" FOREIGN KEY ("eventFormatId") REFERENCES "event_formats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_eventTopicId_fkey" FOREIGN KEY ("eventTopicId") REFERENCES "event_topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
