import { Router } from 'express';
import { AuthController} from './controller';


const router = Router();

const authRoutes = () => {
    router.post('login', AuthController.login);
    router.post('signout', AuthController.logout);

    return router;
}

export default authRoutes;