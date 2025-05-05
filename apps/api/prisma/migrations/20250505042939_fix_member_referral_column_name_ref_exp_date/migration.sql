/*
  Warnings:

  - You are about to drop the column `referraExpiryDate` on the `members` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "members" DROP COLUMN "referraExpiryDate",
ADD COLUMN     "referralExpiryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
