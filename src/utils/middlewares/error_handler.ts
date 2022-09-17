import { Request, Response, NextFunction } from 'express';

import { NotFoundError } from '../errors';

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof NotFoundError) {
        return res.status(404).send({ code: error.code, message: error.message });
    }

    return res.status(500).send(error);
}