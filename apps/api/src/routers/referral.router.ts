import { useReferralNumber } from "@/controllers/referral.controller";
import { verifyToken } from "@/middlewares/auth/verifyToken";
import { Router } from "express";

const referralRouter = Router();

referralRouter.post('/use', useReferralNumber)


export default referralRouter;