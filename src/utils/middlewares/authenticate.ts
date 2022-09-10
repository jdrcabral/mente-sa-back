import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { verifyToken } from '../authentication/tokenGenerator';
import { UserService } from '../../api/users/services';

export const authenticate = async (request: Request, response: Response, next: NextFunction) => {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).send({ error: 'Unauthorized' });
    }
    
    const token: string = authorization.replace('Bearer ', '');
    const userData = verifyToken(token);

    if (!userData) {
        return response.status(401).send({ error: 'Unauthorized' });
    }

    const user = await UserService.findById(userData.id);

    if (!user) {
        return response.status(401).send({ error: 'Unauthorized' });
    }

    request.user = user
    next();
}