import { IUserAuthentication } from '../user';

declare global {
    namespace Express {
        interface Request{
            user: IUserAuthentication
        }
    }
}