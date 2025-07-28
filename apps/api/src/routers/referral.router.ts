import { getReferralPointsById, useReferralNumber } from "../controllers/referral.controller";
import { verifyToken } from "../middlewares/auth/verifyToken";
import { Router } from "express";

const referralRouter = Router();

referralRouter.post('/use', useReferralNumber)
referralRouter.get('/my-points', verifyToken, getReferralPointsById)


export default referralRouter;