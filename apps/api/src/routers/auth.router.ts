import { loginMember, registerMember, registerMemberCheck, sendEmailVerificationCode, sessionLoginMember, verifyEmailVerificationCode, verifyLogin, verifyNewMember } from "@/controllers/auth.controller";
import { verifyToken } from "@/middlewares/auth/verifyToken";
import { Router } from "express";

const authRouter = Router()
authRouter.post('/send-otp', sendEmailVerificationCode)
authRouter.post('/verify-otp', verifyEmailVerificationCode)
authRouter.post('/register', registerMember)
authRouter.post('/login', loginMember)
authRouter.post('/verify-login',verifyEmailVerificationCode, verifyLogin)
authRouter.post('/verify-new-member',verifyEmailVerificationCode, verifyNewMember)
authRouter.post('/register-check', registerMemberCheck)
authRouter.get('/session-login', verifyToken, sessionLoginMember)
authRouter.post('/switch-role', verifyToken, sessionLoginMember);

export default authRouter