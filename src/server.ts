import 'reflect-metadata';
import express from 'express';

const app = express();

app.use(express.json());

app.get('', (req, res) => {
    res.send('Working');
});

export default app;