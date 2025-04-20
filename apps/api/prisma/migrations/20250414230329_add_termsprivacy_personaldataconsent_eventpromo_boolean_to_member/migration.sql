/*
  Warnings:

  - Added the required column `personalDataConsentAccepted` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `termsPrivacyAccepted` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "members" ADD COLUMN     "eventPromoAccepted" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "personalDataConsentAccepted" BOOLEAN NOT NULL,
ADD COLUMN     "termsPrivacyAccepted" BOOLEAN NOT NULL;
