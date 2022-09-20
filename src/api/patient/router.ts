import { Router } from 'express';
import { PatientController} from './controller';

import { validateCreate, validateFilter} from './middlewares/validation';
import { verifyBody, verifyQuery } from '../../utils/middlewares/validation';
const router = Router();

const patientRoutes = () => {
    /**
     * @swagger
     * components:
     *   schemas:
     *     Patient:
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
     */

    /**
     * @swagger
     * /api/v1/patient:
     *   get:
     *     summary: List patients
     *     description: List patients.
     *     tags: [Patient]
    */
    router.get('', verifyQuery(validateFilter()), PatientController.list);
    /**
     * @swagger
     * /api/v1/patient:
     *   post:
     *     summary: Create a patient
     *     description: Create a patient.
     *     tags: [Patient]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Patient'
     *     responses:
     *       201:
     *         description: Success
     *         content:
     *           application/json:
     *             schema:
     *              $ref: '#/components/schemas/Patient'
     *       500:
     *         description: Error
    */
    router.post('', validateCreate(), verifyBody, PatientController.create);

    /**
     * @swagger
     * /api/v1/patient/{id}:
     *   patch:
     *     summary: Update patient
     *     description: Update patient.
     *     tags: [Patient]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Patient'
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: String ID of the user to retrieve.
     *         schema:
     *           type: string
    */
    router.patch(':patientId', validateCreate(), verifyBody, PatientController.partialUpdate);

    /**
     * @swagger
     * /api/v1/patient/{id}:
     *   delete:
     *     summary: Delete professional
     *     description: Deactivate a professional.
     *     tags: [Patient]
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
    router.delete('/:professionalId', PatientController.delete);

    return router;
}

export default patientRoutes;