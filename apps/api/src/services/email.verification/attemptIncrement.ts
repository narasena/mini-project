import { prisma } from "@/prisma";

export async function increaseAttemptCount(code: any, email: any) {
    return await prisma.verificationCode.updateMany({ where: { code, email }, data: { attempts: { increment: 1 } } });
}