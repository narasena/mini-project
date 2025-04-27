import { CodeType } from "@/prisma-generated/client";

export interface IVerificationCode {
    code: string;
    email: string
    type: CodeType
    expiredDate: Date
    isUsed: boolean
    attempts: number
    memberId?: string
}
