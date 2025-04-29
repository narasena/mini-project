import { loginMember, registerMember, registerMemberCheck, sendEmailVerificationCode, verifyEmailVerificationCode, verifyLogin, verifyNewMember } from "@/controllers/auth.controller";
import { Router } from "express";

const authRouter = Router()
authRouter.post('/send-otp', sendEmailVerificationCode)
authRouter.post('/verify-otp', verifyEmailVerificationCode)
authRouter.post('/register', registerMember)
authRouter.post('/login', loginMember)
authRouter.post('/verify-login', verifyLogin)
authRouter.post('/verify-new-member', verifyNewMember)
authRouter.post('/register-check', registerMemberCheck)

export default authRouter