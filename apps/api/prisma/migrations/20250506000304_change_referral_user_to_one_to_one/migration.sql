/*
  Warnings:

  - A unique constraint covering the columns `[referralUserId]` on the table `referral_histories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "referral_histories_referralUserId_key" ON "referral_histories"("referralUserId");
