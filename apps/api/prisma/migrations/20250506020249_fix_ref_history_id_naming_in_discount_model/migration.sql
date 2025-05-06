/*
  Warnings:

  - You are about to drop the column `referralHistoryid` on the `discount_coupons` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referralHistoryId]` on the table `discount_coupons` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "discount_coupons" DROP CONSTRAINT "discount_coupons_referralHistoryid_fkey";

-- DropIndex
DROP INDEX "discount_coupons_referralHistoryid_key";

-- AlterTable
ALTER TABLE "discount_coupons" DROP COLUMN "referralHistoryid",
ADD COLUMN     "referralHistoryId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "discount_coupons_referralHistoryId_key" ON "discount_coupons"("referralHistoryId");

-- AddForeignKey
ALTER TABLE "discount_coupons" ADD CONSTRAINT "discount_coupons_referralHistoryId_fkey" FOREIGN KEY ("referralHistoryId") REFERENCES "referral_histories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
