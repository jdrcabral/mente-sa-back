import { Router } from 'express';
import { ProfessionalController } from './controller';
import { validateCreate, validateFilter } from './middlewares/validation';
import { verifyBody, verifyQuery } from '../../utils/middlewares/validation';

const router = Router();

const professionalRoutes = () => {
    /**
     * @swagger
     * components:
     *   schemas:
     *     Professional:
     *       type: object
     *       properties:
     *         name:
     *           type: string
     *           description: The patient's name.
     *           example: Leanne Graham
     *         cpf:
     *           type: string
     *           description: Patient CPF
     *           example: 000.000.000-00
     *         email:
     *           type: string
     *           description: Patient email
     *           example: mail@mail.com
     *         password:
     *           type: string
     *           description: Password
     *           example: myPassw0rd
     *         birthDate:
     *           type: string
     *           description: Birthdate
     *           example: 01/01/1990
     *         gender:
     *           type: number
     *           description: 0 - MALE, 1 - FEMALE, 2 - NON_BINARY, 3 - OTHER
     *         professionalIdentification:
     *           type: string
     *           description: Professional identification
     *           example: CRP-UF-00000
     */

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
     *              $ref: '#/components/schemas/Professional'
    */
    router.post('', validateCreate(), verifyBody, ProfessionalController.create);

    /**
     * @swagger
     * /api/v1/professionl/{id}:
     *   patch:
     *     summary: Update professional
     *     description: Update professional.
     *     tags: [Professional]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Professional'
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: String ID of the user to retrieve.
     *         schema:
     *           type: string
    */
    router.patch('/:professionalId', validateCreate(), verifyBody, ProfessionalController.partialUpdate);

    /**
     * @swagger
     * /api/v1/professionl/{id}:
     *   delete:
     *     summary: Delete professional
     *     description: Deactivate a professional.
     *     tags: [Professional]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: String ID of the user to retrieve.
     *         schema:
     *           type: string
     *     responses:
     *       204:
     *         description: Success
     *       404:
     *         description: Not Found
    */
    router.delete('/:professionalId', ProfessionalController.delete);

    return router;
}

export default professionalRoutes;