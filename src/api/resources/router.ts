import { Router } from 'express';
import { ResourceController } from './controller';

const router = Router();

const resourcesRoutes = () => {
    /**
     * @swagger
     * components:
     *   schemas:
     *     Resource:
     *       type: object
     *       properties:
     *         title:
     *           type: string
     *           description: Resource's title.
     *           example: A vaca foi pro brejo
     *         category:
     *           type: number
     *           description: 0 - METAFORA, 1 - TRANSE, 2 - FERRAMENTA, 3 - OUTRO
     *         description:
     *           type: string
     *           description: Resource's description
     *           example: Metáfora que conta sobre uma família...
     *         professionalId:
     *           type: string
     *           description: Professional's Id that created the resourse
     *           example: ba7bd728-dceb-476c-ba60-b44a470824bf
     */


  router.get('', ResourceController.list);
      /**
     * @swagger
     * /api/v1/resource/?professionalId={id}:
     *   get:
     *     summary: List active resources
     *     description: List resources of a Professional.
     *     tags: [Resource]
     *     parameters:
     *       - in: path
     *         name: professionalId
     *         required: true
     *         description: Professional's ID who is creating the resource
     *         schema:
     *           type: string    
    */

  router.post('', ResourceController.create);
    /**
     * @swagger
     * /api/v1/resource:
     *   post:
     *     summary: Create new resource
     *     description: Create new resource.
     *     tags: [Resource]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Resource'
    */

  router.put('/:resourceId', ResourceController.update);
    /**
     * @swagger
     * /api/v1/resource/{id}:
     *   put:
     *     summary: Update resource
     *     description: Update resource.
     *     tags: [Resource]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Resource'
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: String ID of resource that will be updated.
     *         schema:
     *           type: string
    */

  router.delete('/:resourceId', ResourceController.delete);
    /**
     * @swagger
     * /api/v1/resource/{id}:
     *   delete:
     *     summary: Delete resource
     *     description: Deactivate a resource.
     *     tags: [Resource]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Resource'
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: String ID of the resource that will be deactivated.
     *         schema:
     *           type: string
    */

  return router;
}

export default resourcesRoutes;