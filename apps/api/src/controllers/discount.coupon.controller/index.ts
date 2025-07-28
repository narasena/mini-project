import { prisma } from "../../prisma";
import { NextFunction, Request, Response } from "express";

export async function getDiscountCouponsById(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { payload } = req.body;
    const coupons = await prisma.discountCoupon.findMany({
      where: {
        memberId: payload.id,
      },
    });
    
    res.status(200).json({
      success: true,
      message: 'Discount coupons found',
      coupons,
    });

  } catch (error) {
    next(error);
  }
}