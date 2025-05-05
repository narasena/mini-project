import jwt from 'jsonwebtoken';
import { IJwtPayload } from './jwt.sign';

export const jwtVerify = (token: string): IJwtPayload => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as IJwtPayload;
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
}