import { prisma } from "../../prisma";
import { CodeType } from "../../prisma-generated/client";
import { IVerificationCode } from "../../types/verification.type";

export async function verifyCode(
  email:string,
  code:string,
  type:CodeType,
): Promise<Partial<IVerificationCode>> {
  const verificationCode:any = await prisma.verificationCode.findFirst({
    where: {
      email: email,
      code: code,
      type,
      isUsed: false,
      expiredAt: { gt: new Date() },
    },    
    orderBy: { createdAt: "desc" },
  });

  if (!verificationCode) {
    // Query to check if code exists but is invalid
    const invalidCode = await prisma.verificationCode.findFirst({
      where: {
        email,
        code,
        type,
      },
    });

    if (invalidCode) {
      if (invalidCode.isUsed) {
        throw new Error('Code has already been used');
      }
      if (invalidCode.expiredAt <= new Date()) {
        throw new Error('Code has expired');
      }
    }

    throw new Error('Invalid verification code');
  }
    
    await prisma.verificationCode.update({
      where: { id: verificationCode.id },
      data: { isUsed: true },
    })
  return verificationCode;
}

