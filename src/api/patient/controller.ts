import {Request, Response} from 'express';
import { PatientService } from './services/v1/patient';
import { Patient } from './models';
import { NotFoundError } from '../../utils/errors';

export class PatientController {

    static async create(request: Request, response: Response) {
        const body = request.body;
        const user: Patient = await PatientService.create(body);
        response.status(201).send(user);
    }

    static async list(request: Request, response: Response) {
        const users = await PatientService.list();

        response.status(200).send(users);
    }

    static partialUpdate(request: Request, response: Response) {
        response.status(200).send({ update: 'Ok' });
    }

    static async delete(request: Request, response: Response) {
        const { professionalId } = request.params;
        try {
            await PatientService.destroy(professionalId);
        } catch (error) {
            if (error instanceof NotFoundError) {
                return response.status(404).send({ code: error.code, message: error.message });
            }
        }
        response.status(204).send({ deleted: 'Ok' });
    }
}