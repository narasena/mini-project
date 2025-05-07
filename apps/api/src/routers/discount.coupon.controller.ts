import { getDiscountCouponsById } from "@/controllers/discount.coupon.controller";
import { verifyToken } from "@/middlewares/auth/verifyToken";
import { Router } from "express";

const discountRouter = Router();

discountRouter.get('/my-coupons',verifyToken, getDiscountCouponsById)

export default discountRouter;