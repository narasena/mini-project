import { jwtVerify } from "@/utils/jwt/jwt.verify";
import { NextFunction, Request, Response } from "express";

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token || token === 'null') {
            throw {
                isExpose: true,
                status: 401,
                message: 'Unauthorized'
            }
        }
        const payload = jwtVerify(token);
        req.body.payload = payload

        next()
    } catch (error) {
        next(error);
        
    }
};