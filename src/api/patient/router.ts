import { Router } from 'express';
import { PatientController} from './controller';


const router = Router();

const patientRoutes = () => {
    
    router.get('', PatientController.list);
    router.post('', PatientController.create);
    router.patch(':userId', PatientController.partialUpdate);

    return router;
}

export default patientRoutes;