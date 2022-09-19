import { Router } from 'express';
import { AuthController} from './controller';


const router = Router();

const authRoutes = () => {

    router.post('/professionalLogin', AuthController.professionalLogin);
    /**
     * @swagger
     * /api/v1/auth/professionalLogin:
     *   post:
     *     summary: Authenticate a professional
     *     description: Authenticate a professional.
     *     tags: [Authentication]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties: 
     *                email:
     *                  type: string
     *                password:
     *                  type: string
     *              example:
     *                email: professional@email.com 
     *                password: password 
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 token:
     *                   type: string
     *       403:
     *         description: Forbiden
     *       500:
     *         description: Error
    */

    router.post('/patientLogin', AuthController.patientLogin);
    /**
     * @swagger
     * /api/v1/auth/patientLogin:
     *   post:
     *     summary: Authenticate a patient
     *     description: Authenticate a patient.
     *     tags: [Authentication]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties: 
     *                email:
     *                  type: string
     *                password:
     *                  type: string
     *              example:
     *                email: patient@email.com 
     *                password: password 
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 token:
     *                   type: string
     *       403:
     *         description: Forbiden
     *       500:
     *         description: Error
     */

    return router;
}

export default authRoutes;