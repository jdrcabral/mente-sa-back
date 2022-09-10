import {Request, Response} from 'express';
import { SessionService } from './services'
import { User, UserRole } from '../users/models';
import { Session } from './models';

export class SessionController {

    static async create(request: Request, response: Response) {
        const body = request.body;
        const session: Session = await SessionService.create(body);
        response.status(201).send(session);
    }

    static async list(request: Request, response: Response) {
        const user: User | undefined = request.user as User | undefined;

        if (!user) {
            return response.status(500).send({ error: 'User not defined' });
        }

        let sessions: Session[];

        if (user.role == UserRole.PATIENT) {
            sessions = await SessionService.listByPatient(user);
        } else if (user.role == UserRole.PROFESSIONAL) {
            sessions = await SessionService.listByProfessional(user);
        } else {
            sessions = await SessionService.list();
        }

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

    static partialUpdate(request: Request, response: Response) {
        response.status(200).send({ update: 'Ok' });
        
    }

    static async delete(request: Request, response: Response) {
        const { sessionId } = request.params;

        const session = await SessionService.findById(sessionId);

        if (!session) {
            return response.status(404).send({ error: 'Session not found!' });
        }

        session.remove();
        response.sendStatus(204);
    }
}