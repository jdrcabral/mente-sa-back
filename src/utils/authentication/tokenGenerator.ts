import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { IUserAuthentication } from '../../@types/user';

interface IUserLogin {
    email: string;
    id: string;
    professionalId?: string;
}
export const createToken = ({ email, id, professionalId }: IUserLogin): string => {
    const payloadData = {
        email,
        id,
        professionalId
    }
    const token = jwt.sign(
        payloadData, 
        '71f196619afc78e936a697ff7ed60619', 
        { expiresIn: '1d'}
    );
    
    return token;
}

export const verifyToken = (token: string): IUserAuthentication|null => {
    let payload;
    try {
        payload = jwt.verify(token, '71f196619afc78e936a697ff7ed60619') as any;

    } catch (JsonWebTokenError) {
        console.error('Failed to verify token');
        return null;
    }
    const user: IUserAuthentication = {
        email: payload.email,
        id: payload.id,
    };

    return user;
}