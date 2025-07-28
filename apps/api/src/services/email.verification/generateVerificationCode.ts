import { prisma } from "../../prisma";
import { CodeType } from "../../prisma-generated/client";
import { IVerificationCode } from "../../types/verification.type";
import { generateCodeEightChars } from "../../utils/code.generator/codeGeneratorEightChars";

export async function generateEmailVerificationCode(email:string, type:CodeType, memberId = null):Promise<Partial<IVerificationCode>> {
    const code = generateCodeEightChars()
    const expiredAt = new Date(Date.now() + 20 * 60 * 1000)

    const createVerificationCode = await prisma.verificationCode.create({
        data: {
            email,
            code,
            type,
            expiredAt,
            memberId
        }
    })
    return {
      ...createVerificationCode,
      memberId: createVerificationCode.memberId ?? undefined,
    };
}