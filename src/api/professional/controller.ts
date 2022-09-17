import {NextFunction, Request, Response} from 'express';
import { ProfessionalService } from './services/v1/professional';
import { Professional } from './models';

export class ProfessionalController {

    static async create(request: Request, response: Response) {
        const body = request.body;
        const user: Professional = await ProfessionalService.create(body);
        response.status(201).send(user);
    }

    static async list(request: Request, response: Response, next: NextFunction) {
        const query = request.query;
        try{
            const users = await ProfessionalService.list(query);
            response.status(200).send(users);
        } catch(error) {
            next(error);
        }
    }

    static async partialUpdate(request: Request, response: Response) {
        const { professionalId } = request.params;
        const professional = await ProfessionalService.update(professionalId, request.body);
        response.status(200).send(professional);
    }

    static async delete(request: Request, response: Response, next: NextFunction) {
        const { professionalId } = request.params;
        try {
            await ProfessionalService.destroy(professionalId);
        } catch (error) {
            return next(error);
        }
        response.status(204).send({ deleted: 'Ok' });
    }
}