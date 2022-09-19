import 'reflect-metadata';
import express, { Request, Response, NextFunction} from 'express';


import ApiV1Router from './api/router';
import { errorHandler } from './utils/middlewares/error_handler';

const app = express();

app.use(express.json());

ApiV1Router(app);
app.use(errorHandler);

export default app;