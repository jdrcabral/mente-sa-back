import {NextFunction, Request, Response} from 'express';
import { SessionService } from './services/v1';
import { Professional } from '../professional/models';
import { Session } from './models';
import { Patient } from '../patient/models';

export class SessionController {

    static async create(request: Request, response: Response) {
        const body = request.body;
        const session: Session = await SessionService.create(body);
        response.status(201).send(session);
    }

    static async list(request: Request, response: Response) {
        const query = request.query;

        const sessions = await SessionService.list(query);
        response.status(200).send(sessions);
    }


    static async retrieve(request: Request, response: Response) {
        const { sessionId } = request.params;
        const session = await SessionService.findById(sessionId);

        if (!session) {
            return response.status(404).send({ error: 'Session not found' });
        }

        response.status(200).send(session);
    }

    static async partialUpdate(request: Request, response: Response) {
        const { sessionId } = request.params;
        const session = await SessionService.update(sessionId, request.body);
        response.status(200).send(session);
    }

    static async delete(request: Request, response: Response, next: NextFunction) {
        const { sessionId } = request.params;

        try {
            await SessionService.destroy(sessionId);
        } catch (error) {
            next(error);
        }
        response.status(204).send({ deleted: 'Ok' });
    }
}