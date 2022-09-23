import 'reflect-metadata';
import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors';


import ApiV1Router from './api/router';
import { errorHandler } from './utils/middlewares/error_handler';

const app = express();

app.use(express.json());

// const allowedOrigins = ['http://localhost:3000'];
const allowedOrigins = ['*'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

ApiV1Router(app);
app.use(errorHandler);

export default app;