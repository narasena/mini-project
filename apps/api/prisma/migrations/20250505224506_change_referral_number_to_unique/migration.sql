/*
  Warnings:

  - A unique constraint covering the columns `[referralNumber]` on the table `members` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "members_referralNumber_key" ON "members"("referralNumber");
