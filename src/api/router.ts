import { Express } from 'express';
import UserRouter from './users/router';
import AuthRouter from './auth/router';
import { AuthController } from './auth/controller';
import SessionRouter from './sessions/router';

const configureRoutes =  (app: Express) => {

    app.post('/api/v1/auth/login', AuthController.login)
    app.use('/api/v1/users', UserRouter());
    app.use('/api/v1/sessions/', SessionRouter());
}

export default configureRoutes;