import { Router } from 'express';
import { ProfessionalController } from './controller';
import { validateCreate, validateFilter } from './middlewares/validation';
import { verifyBody, verifyQuery } from '../../utils/middlewares/validation';

const router = Router();

const professionalRoutes = () => {
    
    router.get('', verifyQuery(validateFilter()), ProfessionalController.list);
    router.post('', validateCreate(), verifyBody, ProfessionalController.create);
    router.patch('/:professionalId', validateCreate(), verifyBody, ProfessionalController.partialUpdate);
    router.delete('/:professionalId', ProfessionalController.delete);

    return router;
}

export default professionalRoutes;