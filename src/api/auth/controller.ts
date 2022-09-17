import {Request, Response} from 'express';
import { createToken } from '../../utils/authentication/tokenGenerator';
import { Patient } from '../patient/models';
import { Professional } from '../professional/models';
import { PatientService } from '../patient/services/v1';
import { ProfessionalService } from '../professional/services/v1';

export class AuthController {

    static async professionalLogin(request: Request, response: Response) {
        const { email, password } = request.body;
        const professional: Professional|null = await ProfessionalService.findOneByEmail(email);

        if ( professional === null || !professional.matchUserPassword(password)) {
            return response.status(403).send({ error: 'Failed to authenticate' });
        }

        const token = createToken(professional);
        response.status(200).send({ token });
    }
    
    static async patientLogin(request: Request, response: Response) {
        const { email, password } = request.body;
        const patient: Patient|null = await PatientService.findOneByEmail(email);

        if ( patient === null || !patient.matchUserPassword(password)) {
            return response.status(403).send({ error: 'Failed to authenticate' });
        }

        const token = createToken(patient);
        response.status(200).send({ token });
    }
}