/*
  Warnings:

  - You are about to drop the `Country_phone` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "CodeType" AS ENUM ('REGISTRATION', 'LOGIN');

-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_countryPhoneId_fkey";

-- DropTable
DROP TABLE "Country_phone";

-- CreateTable
CREATE TABLE "country_phone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "mobileCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "country_phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_code" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "type" "CodeType" NOT NULL,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "memberId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "verification_code_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "country_phone_name_key" ON "country_phone"("name");

-- CreateIndex
CREATE UNIQUE INDEX "country_phone_code_key" ON "country_phone"("code");

-- CreateIndex
CREATE INDEX "verification_code_email_idx" ON "verification_code"("email");

-- CreateIndex
CREATE INDEX "verification_code_code_idx" ON "verification_code"("code");

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_countryPhoneId_fkey" FOREIGN KEY ("countryPhoneId") REFERENCES "country_phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verification_code" ADD CONSTRAINT "verification_code_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE SET NULL ON UPDATE CASCADE;
