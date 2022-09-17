import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const verifyBody = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

export const verifyQuery = (validators: Array<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {

    const error = validationResult(req);
    const extraFields = checkIfExtraFields(validators, req)
    if (!error.isEmpty()) {
        req.query = {};
    }
    next();
  }
}

const checkIfExtraFields = (validators: Array<any>, req: Request) => {
    const allowedFields = validators.reduce((fields, rule) => {
      return [...fields, ...rule.builder.fields]
    }, []).sort()
  
    // Check for all common request inputs
    const requestInput = { ...req.query, ...req.params, ...req.body }
    const requestFields = Object.keys(requestInput).sort()
  
    if (JSON.stringify(allowedFields) === JSON.stringify(requestFields)) {
      return false
    }
    return true
  }