import { prisma } from "@/prisma";
import { NextFunction, Request, Response } from "express";

export async function findCountryPhones(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const countryPhones = await prisma.countryPhone.findMany()

        res.status(200).json({
            success: true,
            message: 'Country phones retrieved successfully',
            countryPhones
        })
    } catch (error) {
        next(error)
        
    }
}