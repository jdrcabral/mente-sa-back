import { Router } from 'express';
import { UserController} from './controller';


const router = Router();

const userRoutes = () => {
    
    router.get('', UserController.list);
    router.post('', UserController.create);
    router.patch(':userId', UserController.partialUpdate);

    return router;
}

export default userRoutes;