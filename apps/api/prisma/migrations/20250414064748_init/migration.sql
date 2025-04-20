-- CreateTable
CREATE TABLE "Country_phone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "mobileCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "members" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "countryPhoneId" INTEGER NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "birthDate" TEXT NOT NULL,
    "sex" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_phone_name_key" ON "Country_phone"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_phone_code_key" ON "Country_phone"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Country_phone_mobileCode_key" ON "Country_phone"("mobileCode");

-- CreateIndex
CREATE UNIQUE INDEX "members_email_key" ON "members"("email");

-- CreateIndex
CREATE UNIQUE INDEX "members_phoneNumber_key" ON "members"("phoneNumber");

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_countryPhoneId_fkey" FOREIGN KEY ("countryPhoneId") REFERENCES "Country_phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
