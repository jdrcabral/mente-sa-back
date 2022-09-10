import {Request, Response} from 'express';
import { UserService } from './services';
import { User } from './models';

export class UserController {

    static async create(request: Request, response: Response) {
        const body = request.body;
        const user: User = await UserService.create(body);
        response.status(201).send(user);
    }

    static async list(request: Request, response: Response) {
        const users = await UserService.list();

        response.status(200).send(users);
    }

    static partialUpdate(request: Request, response: Response) {
        response.status(200).send({ update: 'Ok' });
        
    }

    static delete(request: Request, response: Response) {
        response.status(204).send({ deleted: 'Ok' });
    }
}