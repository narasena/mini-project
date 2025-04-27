import { prisma } from "@/prisma";
import { IVerificationCode } from "@/types/verification.type";

export async function verifyCode(
  code:any,
  email:any,
  type:any,
): Promise<Partial<IVerificationCode> | null> {
  const verificationCode:any = await prisma.verificationCode.findFirst({
    where: {
      code,
      email,
      type,
      isUsed: false,
      expiredAt: { gt: new Date() },
    },
  });
    if (!verificationCode) {
    throw new Error("Invalid verification code");
    }
    
    await prisma.verificationCode.update({
      where: { id: verificationCode.id },
      data: { isUsed: true },
    })
  return verificationCode;
}

