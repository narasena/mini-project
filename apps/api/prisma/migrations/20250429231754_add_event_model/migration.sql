-- CreateEnum
CREATE TYPE "TicketType" AS ENUM ('BERBAYAR', 'BAYAR_SESUKAMU', 'GRATIS');

-- CreateEnum
CREATE TYPE "TicketDataFormType" AS ENUM ('NO_ID', 'WITH_ID');

-- CreateTable
CREATE TABLE "creator_profile" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "bannerImgUrl" TEXT,
    "logoImgUrl" TEXT,
    "profileLinkUrl" TEXT NOT NULL,
    "organizerName" TEXT NOT NULL,
    "countryPhoneId" INTEGER NOT NULL,
    "creatorPhoneNumber" TEXT,
    "address" TEXT,
    "aboutUsInfo" TEXT,
    "xUserName" TEXT,
    "igUserName" TEXT,
    "fbProfileUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "creator_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "creatorId" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "eventCategoryId" INTEGER NOT NULL,
    "eventTopicId" INTEGER NOT NULL,
    "organizerName" TEXT,
    "organizerLogoImgUrl" TEXT,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventTime" TIMESTAMP(3) NOT NULL,
    "eventLocation" TEXT NOT NULL,
    "eventDesc" TEXT,
    "ticketType" "TicketType" NOT NULL,
    "ticketName" TEXT NOT NULL,
    "ticketQty" INTEGER NOT NULL,
    "ticketPrice" INTEGER NOT NULL DEFAULT 20000,
    "ticketDesc" TEXT,
    "ticketTermsAndCondition" TEXT NOT NULL,
    "ticketStartDate" TIMESTAMP(3) NOT NULL,
    "ticketEndDate" TIMESTAMP(3) NOT NULL,
    "eventCPName" TEXT NOT NULL,
    "eventCPEmail" TEXT NOT NULL,
    "countryPhoneId" INTEGER NOT NULL,
    "ticketDataFormType" "TicketDataFormType" NOT NULL,
    "maxTicketPerTransaction" INTEGER NOT NULL,
    "oneEmailOneTransaction" BOOLEAN NOT NULL DEFAULT false,
    "ticketDataFormUnique" BOOLEAN NOT NULL DEFAULT false,
    "isDraft" BOOLEAN DEFAULT false,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "creator_profile_memberId_key" ON "creator_profile"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "creator_profile_profileLinkUrl_key" ON "creator_profile"("profileLinkUrl");

-- AddForeignKey
ALTER TABLE "creator_profile" ADD CONSTRAINT "creator_profile_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "creator_profile" ADD CONSTRAINT "creator_profile_countryPhoneId_fkey" FOREIGN KEY ("countryPhoneId") REFERENCES "country_phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "creator_profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_countryPhoneId_fkey" FOREIGN KEY ("countryPhoneId") REFERENCES "country_phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
