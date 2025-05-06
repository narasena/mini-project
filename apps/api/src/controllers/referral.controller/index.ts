import { prisma } from '@/prisma';
import { PointsType } from '@/prisma-generated/client';
import { NextFunction, Request, Response } from 'express';

export async function findReferralNumber(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { referralNumber } = req.params;
    const member = await prisma.member.findUnique({
      where: {
        referralNumber,
      },
    });
    if (!member) {
      throw {
        isExpose: true,
        status: 400,
        message: 'Member not found',
      };
    } else {
      if (member.referralExpiryDate < new Date()) {
        throw {
          isExpose: true,
          status: 400,
          message: 'Referral Number is Expired',
        };
      }
    }
    res.status(200).json({
      success: true,
      message: 'Member found',
      member: {
        referralNumber: member.referralNumber,
        referralExpiryDate: member.referralExpiryDate,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function useReferralNumber(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { referralNumber, email } = req.body;
    const referralOwner = await prisma.member.findUnique({
      where: {
        referralNumber,
      },
      include: {
        referralUserHistory: true,
      },
    });
    if (!referralOwner) {
      throw {
        isExpose: true,
        status: 400,
        message: 'Referral Number not found',
      };
    } else {
      if (referralOwner.referralExpiryDate < new Date()) {
        throw {
          isExpose: true,
          status: 400,
          message: 'Referral Number is Expired',
        };
      }
    }
    const referralUser = await prisma.member.findUnique({
      where: {
        email,
      },
    });
    if (!referralUser) {
      throw {
        isExpose: true,
        status: 400,
        message: 'Member not found',
      };
    }
    const existingReferralUserHistory = await prisma.referralHistory.findUnique(
      {
        where: {
          referralUserId: referralUser.id,
        },
      },
    );
    if (existingReferralUserHistory) {
      return res.status(200).json({
        success: true,
        message: 'Referral Number had been used',
        referralNumber,
      });
    }
    const newReferralUserHistory = await prisma.referralHistory.create({
      data: {
        referralOwnerId: referralOwner.id,
        referralUserId: referralUser?.id,
      },
    });

    const newPointsTransaction = await prisma.pointsTransaction.create({
      data: {
        memberId: referralOwner.id,
        type: 'EARNED' as PointsType,
        expiryDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        referralHistoryId: newReferralUserHistory.id,
      },
    });

    const newDiscountCoupon = await prisma.discountCoupon.create({
      data: {
        memberId: referralUser.id,
        expiryDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        referralHistoryId: newReferralUserHistory.id,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Referral Number found',
      referralNumber,
      newReferralUserHistory,
    });
  } catch (error) {
    next(error);
  }
}

export async function getReferralPointsById(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { payload } = req.body;
    const points = await prisma.pointsTransaction.findMany({
      where: {
        memberId: payload.id,
      },
    });
    
    res.status(200).json({
      success: true,
      message: 'Points found',
      points,
    });

  } catch (error) {
    next(error);
  }
}