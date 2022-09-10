import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { User } from '../../api/users/models';

export const createToken = (user: User): string => {
    const payloadData = {
        email: user.email,
        id: user.id,
    }
    const token = jwt.sign(payloadData, 'secrep', { expiresIn: '1d'});

    return token;
}

export const verifyToken = (token: string): User|null => {
    let payload;
    try {
        payload = jwt.verify(token, 'secrep') as any;

    } catch (JsonWebTokenError) {
        console.error('Failed to verify token');
        return null;
    }
    const user = {
        email: payload.email,
        id: payload.id,
    };

    return user as User;
}