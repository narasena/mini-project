/*
  Warnings:

  - You are about to drop the column `pointTransactionId` on the `ticket_transactions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ticket_transactions" DROP CONSTRAINT "ticket_transactions_pointTransactionId_fkey";

-- AlterTable
ALTER TABLE "ticket_transactions" DROP COLUMN "pointTransactionId";

-- CreateTable
CREATE TABLE "_PointsTransactionToTicketTransaction" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PointsTransactionToTicketTransaction_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PointsTransactionToTicketTransaction_B_index" ON "_PointsTransactionToTicketTransaction"("B");

-- AddForeignKey
ALTER TABLE "_PointsTransactionToTicketTransaction" ADD CONSTRAINT "_PointsTransactionToTicketTransaction_A_fkey" FOREIGN KEY ("A") REFERENCES "PointsTransaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PointsTransactionToTicketTransaction" ADD CONSTRAINT "_PointsTransactionToTicketTransaction_B_fkey" FOREIGN KEY ("B") REFERENCES "ticket_transactions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
