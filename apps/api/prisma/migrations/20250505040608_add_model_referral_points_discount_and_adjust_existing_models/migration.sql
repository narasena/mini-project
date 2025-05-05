/*
  Warnings:

  - The primary key for the `ticket_transactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `finalPrice` to the `ticket_transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PointsType" AS ENUM ('EARNED', 'REDEEM');

-- CreateEnum
CREATE TYPE "CouponType" AS ENUM ('REFERRAL', 'PROMOTIONAL', 'LOYALTY', 'EVENT_SPECIFIC');

-- DropForeignKey
ALTER TABLE "ticket_transaction_details" DROP CONSTRAINT "ticket_transaction_details_ticketTransactionId_fkey";

-- AlterTable
ALTER TABLE "members" ADD COLUMN     "referraExpiryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "referralNumber" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "ticket_transaction_details" ALTER COLUMN "ticketTransactionId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ticket_transactions" DROP CONSTRAINT "ticket_transactions_pkey",
ADD COLUMN     "discountCouponId" TEXT,
ADD COLUMN     "finalPrice" INTEGER NOT NULL,
ADD COLUMN     "pointTransactionId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ticket_transactions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ticket_transactions_id_seq";

-- CreateTable
CREATE TABLE "referral_histories" (
    "id" TEXT NOT NULL,
    "referralOwnerId" TEXT NOT NULL,
    "referralUserId" TEXT NOT NULL,
    "pointsEarned" INTEGER NOT NULL DEFAULT 10000,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "referral_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PointsTransaction" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "PointsType" NOT NULL,
    "expiryDate" TIMESTAMP(3),
    "ticketTransactionId" TEXT,
    "referralHistoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "PointsTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discount_coupons" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'REFERRAL_WELCOME',
    "type" "CouponType" NOT NULL DEFAULT 'REFERRAL',
    "percentage" INTEGER NOT NULL DEFAULT 10,
    "expiryDate" TIMESTAMP(3),
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "referralHistoryid" TEXT,
    "ticketTransactionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "discount_coupons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PointsTransaction_referralHistoryId_key" ON "PointsTransaction"("referralHistoryId");

-- CreateIndex
CREATE UNIQUE INDEX "discount_coupons_referralHistoryid_key" ON "discount_coupons"("referralHistoryid");

-- AddForeignKey
ALTER TABLE "referral_histories" ADD CONSTRAINT "referral_histories_referralOwnerId_fkey" FOREIGN KEY ("referralOwnerId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referral_histories" ADD CONSTRAINT "referral_histories_referralUserId_fkey" FOREIGN KEY ("referralUserId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointsTransaction" ADD CONSTRAINT "PointsTransaction_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointsTransaction" ADD CONSTRAINT "PointsTransaction_referralHistoryId_fkey" FOREIGN KEY ("referralHistoryId") REFERENCES "referral_histories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_transactions" ADD CONSTRAINT "ticket_transactions_pointTransactionId_fkey" FOREIGN KEY ("pointTransactionId") REFERENCES "PointsTransaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discount_coupons" ADD CONSTRAINT "discount_coupons_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discount_coupons" ADD CONSTRAINT "discount_coupons_referralHistoryid_fkey" FOREIGN KEY ("referralHistoryid") REFERENCES "referral_histories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discount_coupons" ADD CONSTRAINT "discount_coupons_ticketTransactionId_fkey" FOREIGN KEY ("ticketTransactionId") REFERENCES "ticket_transactions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_transaction_details" ADD CONSTRAINT "ticket_transaction_details_ticketTransactionId_fkey" FOREIGN KEY ("ticketTransactionId") REFERENCES "ticket_transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
