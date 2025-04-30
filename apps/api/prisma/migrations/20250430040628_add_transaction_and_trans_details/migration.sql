/*
  Warnings:

  - You are about to drop the column `countryPhoneId` on the `events` table. All the data in the column will be lost.
  - Added the required column `eventCountryPhoneId` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_countryPhoneId_fkey";

-- AlterTable
ALTER TABLE "events" DROP COLUMN "countryPhoneId",
ADD COLUMN     "eventCountryPhoneId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ticket_transactions" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "memberId" TEXT NOT NULL,
    "ticketCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ticket_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_transaction_details" (
    "id" SERIAL NOT NULL,
    "ticketTransactionId" INTEGER NOT NULL,
    "orderName" TEXT NOT NULL,
    "orderCountryPhoneId" INTEGER NOT NULL,
    "orderEmail" TEXT NOT NULL,
    "orderBirthDate" TEXT NOT NULL,
    "orderSex" "Sex" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ticket_transaction_details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ticket_transactions_ticketCode_key" ON "ticket_transactions"("ticketCode");

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_eventCountryPhoneId_fkey" FOREIGN KEY ("eventCountryPhoneId") REFERENCES "country_phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_transactions" ADD CONSTRAINT "ticket_transactions_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_transactions" ADD CONSTRAINT "ticket_transactions_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_transaction_details" ADD CONSTRAINT "ticket_transaction_details_ticketTransactionId_fkey" FOREIGN KEY ("ticketTransactionId") REFERENCES "ticket_transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_transaction_details" ADD CONSTRAINT "ticket_transaction_details_orderCountryPhoneId_fkey" FOREIGN KEY ("orderCountryPhoneId") REFERENCES "country_phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
