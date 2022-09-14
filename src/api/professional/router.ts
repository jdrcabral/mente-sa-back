import { Router } from 'express';
import { ProfessionalController } from './controller';


const router = Router();

const professionalRoutes = () => {
    
    router.get('', ProfessionalController.list);
    router.post('', ProfessionalController.create);
    router.patch('/:professionalId', ProfessionalController.partialUpdate);
    router.delete('/:professionalId', ProfessionalController.delete);

    return router;
}

export default professionalRoutes;