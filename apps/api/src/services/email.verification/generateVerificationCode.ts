import { generateCodeEightChars } from "@/utils/code.generator/codeGeneratorEightChars";

export async function generateEmailVerificationCode(email:string, type:string, memberId = null) {
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
}