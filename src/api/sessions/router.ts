import { Router } from 'express';
import { SessionController} from './controller';

import { authenticate } from '../../utils/middlewares/authenticate';
const router = Router();

const sessionRoutes = () => {
    router.use(authenticate);

    router.get('', SessionController.list);
    router.post('', SessionController.create);
    router.get(':sessionId', SessionController.retrieve);
    router.patch(':sessionId', SessionController.partialUpdate);
    router.delete(':sessionId', SessionController.delete);
    return router;

}

export default sessionRoutes;