import {Request, Response} from 'express';
import { User } from '../users/models';
import { UserService } from '../users/services'
import { createToken } from '../../../utils/authentication/tokenGenerator';

export class AuthController {

    static async login(request: Request, response: Response) {
        const { email, password } = request.body;
        const user: User|null = await UserService.findOneByEmail(email);

        if ( user === null || !user.matchUserPassword(password)) {
            return response.status(403).send({ error: 'Failed to authenticate' });
        }

        const token = createToken(user);
        response.status(200).send({ token });
    }

    static async logout(request: Request, response: Response) {
        const users = await UserService.list();

        response.status(200).send(users);
    }
}