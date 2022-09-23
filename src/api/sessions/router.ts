import { Router } from 'express';
import { SessionController} from './controller';

import { authenticate } from '../../utils/middlewares/authenticate';
const router = Router();

const sessionRoutes = () => {
    // router.use(authenticate);
        /**
     * @swagger
     * components:
     *   schemas:
     *     Session:
     *       type: object
     *       properties:
     *         professional:
     *           type: string
     *           description: The professional id.
     *           example: de6b3e94-2dec-4580-b7b5-94abf889844d
     *         patient:
     *           type: string
     *           description: Patiend id
     *           example: de6b3e94-2dec-4580-b7b5-94abf889844d
     *         scheduledDate:
     *           type: date
     *           description: Date of the session
     *           example: 2022-09-30T20:00:00
     *         status:
     *           type: number
     *           description: PENDING - 0, CANCELED - 1, CONFIRMED - 2,
     *           example: o
     *         theme:
     *           type: string
     *           description: Theme of the sessions
     *           example: Traumas
     *         duration:
     *           type: number
     *           description: Duration of the session
     *           example: 50
     *         type:
     *           type: string
     *           description: INDIVIDUAL - 0, COUPLE - 1, GROUP - 2
     *           example: 0
     *         resourse:
     *           type: string
     *           description: Resource id
     *           example: de6b3e94-2dec-4580-b7b5-94abf889844d
     */

    /**
     * @swagger
     * /api/v1/sessions:
     *   get:
     *     summary: List sessions
     *     description: List sessions.
     *     tags: [Session]
    */    
    router.get('', SessionController.list);

    /**
     * @swagger
     * /api/v1/sessions:
     *   post:
     *     summary: Create new session
     *     description: Create new session.
     *     tags: [Session]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Session'
    */
    router.post('', SessionController.create);
    
    /**
     * @swagger
     * /api/v1/sessions/{id}:
     *   get:
     *     summary: Update session
     *     description: Update session.
     *     tags: [Session]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Session'
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: String ID of the session to retrieve.
     *         schema:
     *           type: string
    */
    router.get('/:sessionId', SessionController.retrieve);

    /**
     * @swagger
     * /api/v1/sessions/{id}:
     *   patch:
     *     summary: Update session
     *     description: Update session.
     *     tags: [Session]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Session'
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: String ID of the session to update.
     *         schema:
     *           type: string
    */
    router.patch('/:sessionId', SessionController.partialUpdate);

    /**
     * @swagger
     * /api/v1/sessions/{id}:
     *   delete:
     *     summary: Delete session
     *     description: Deactivate a session.
     *     tags: [Session]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: String ID of the session to delete.
     *         schema:
     *           type: string
     *     responses:
     *       204:
     *         description: Success
     *       404:
     *         description: Not Found
    */
    router.delete('/:sessionId', SessionController.delete);
    return router;

}

export default sessionRoutes;