import { Express } from 'express';
import UserRouter from './users/router';
import PatientRouter from './patient/router';
import ProfessionalRouter from './professional/router';
import AuthenticationRouter from './auth/router'

// import { AuthController } from './auth/controller';
import SessionRouter from './sessions/router';

const configureRoutes =  (app: Express) => {

    app.use('/api/v1/auth', AuthenticationRouter());
    app.use('/api/v1/users', UserRouter());
    app.use('/api/v1/sessions/', SessionRouter());
    app.use('/api/v1/patient', PatientRouter());
    app.use('/api/v1/professional', ProfessionalRouter());
}

export default configureRoutes;