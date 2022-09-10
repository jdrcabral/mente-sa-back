import 'reflect-metadata';
import express from 'express';
import ApiV1Router from './api/router';

const app = express();

app.use(express.json());

ApiV1Router(app);

export default app;