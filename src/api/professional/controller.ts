import {Request, Response} from 'express';
import { ProfessionalService } from './services/v1/professional';
import { Professional } from './models';
import { NotFoundError } from '../../utils/errors';

export class ProfessionalController {

    static async create(request: Request, response: Response) {
        const body = request.body;
        const user: Professional = await ProfessionalService.create(body);
        response.status(201).send(user);
    }

    static async list(request: Request, response: Response) {
        const users = await ProfessionalService.list();

        response.status(200).send(users);
    }

    static partialUpdate(request: Request, response: Response) {
        response.status(200).send({ update: 'Ok' });
    }

    static async delete(request: Request, response: Response) {
        console.log(request.params);
        const { professionalId } = request.params;
        try {
            await ProfessionalService.destroy(professionalId);
        } catch (error) {
            if (error instanceof NotFoundError) {
                return response.status(404).send({ code: error.code, message: error.message });
            }
        }
        response.status(204).send({ deleted: 'Ok' });
    }
}