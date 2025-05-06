/*
  Warnings:

  - You are about to drop the column `pointsEarned` on the `referral_histories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PointsTransaction" ALTER COLUMN "amount" SET DEFAULT 10000;

-- AlterTable
ALTER TABLE "referral_histories" DROP COLUMN "pointsEarned";
