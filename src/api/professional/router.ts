import { Router } from 'express';
import { ProfessionalController } from './controller';
import { validateCreate, validateFilter } from './middlewares/validation';
import { verifyBody, verifyQuery } from '../../utils/middlewares/validation';

const router = Router();

const professionalRoutes = () => {
    
    /**
     * @swagger
     * /api/v1/professional:
     *   get:
     *     summary: List professionals
     *     description: List professionals.
     *     tags: [Professional]
    */
    router.get('', verifyQuery(validateFilter()), ProfessionalController.list);

    /**
     * @swagger
     * /api/v1/professional:
     *   post:
     *     summary: Create new professional
     *     description: Create new professional.
     *     tags: [Professional]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              type: object
    */
    router.post('', validateCreate(), verifyBody, ProfessionalController.create);

    /**
     * @swagger
     * /api/v1/professionl/{id}:
     *   post:
     *     summary: Create new professional
     *     description: Create new professional.
     *     tags: [Professional]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              type: object
    */
    router.patch('/:professionalId', validateCreate(), verifyBody, ProfessionalController.partialUpdate);
    router.delete('/:professionalId', ProfessionalController.delete);

    return router;
}

export default professionalRoutes;