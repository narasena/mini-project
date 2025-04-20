/*
  Warnings:

  - Changed the type of `sex` on the `members` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY');

-- AlterTable
ALTER TABLE "members" DROP COLUMN "sex",
ADD COLUMN     "sex" "Sex" NOT NULL;
