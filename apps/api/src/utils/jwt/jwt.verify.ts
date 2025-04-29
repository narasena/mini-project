import jwt from 'jsonwebtoken';
import { IJwtPayload } from './jwt.sign';

export const verifyToken = (token: string): IJwtPayload => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as IJwtPayload;
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
}