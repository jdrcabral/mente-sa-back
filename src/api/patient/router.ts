import { Router } from 'express';
import { PatientController} from './controller';

import { validateCreate, validateFilter} from './middlewares/validation';
import { verifyBody, verifyQuery } from '../../utils/middlewares/validation';
const router = Router();

const patientRoutes = () => {
    
    router.get('', verifyQuery(validateFilter()), PatientController.list);
    router.post('', validateCreate(), verifyBody, PatientController.create);
    router.patch(':patientId', validateCreate(), verifyBody, PatientController.partialUpdate);

    return router;
}

export default patientRoutes;