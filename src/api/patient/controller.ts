import {NextFunction, Request, Response} from 'express';
import { PatientService } from './services/v1/patient';
import { Patient } from './models';
import { NotFoundError } from '../../utils/errors';

export class PatientController {

    static async create(request: Request, response: Response) {
        const body = request.body;
        const user: Patient = await PatientService.create(body);
        response.status(201).send(user);
    }

    static async list(request: Request, response: Response, next: NextFunction) {
        const query = request.query;
        try{
            const users = await PatientService.list(query);
            response.status(200).send(users);
        } catch(error) {
            next(error);
        }
    }

    static async partialUpdate(request: Request, response: Response) {
        const { patientId } = request.params;
        const patient = await PatientService.update(patientId, request.body);
        response.status(200).send(patient);
    }

    static async delete(request: Request, response: Response, next: NextFunction) {
        const { professionalId } = request.params;
        try {
            await PatientService.destroy(professionalId);
        } catch (error) {
            next(error);
        }
        response.status(204).send({ deleted: 'Ok' });
    }
}