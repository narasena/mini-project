import jwt from 'jsonwebtoken'

export interface IJwtPayload {
    id: string | number
    email: string
    activeRole: 'BUYER' | 'EVENT_CREATOR'
    verification: {
        isPhoneVerified: boolean
        isProfileDataProvided: boolean
    }
}

export const jwtSign = (payload: IJwtPayload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY!, {
        expiresIn: '1d',
    });
}