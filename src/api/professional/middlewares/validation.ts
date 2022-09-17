import { body, query } from 'express-validator';

export const validateCreate = () => {
    return [
        body('name').isString().exists(),
        body('cpf').isString().exists(),
        body('email').isString().exists(),
        body('password').isString().exists(),
        body('birthDate').isString().exists(),
        body('gender').isNumeric().exists(),
        body('professionalIdentification').isString().exists(),
    ]
}

export const validateFilter = () => {
    return [
        query('name').optional(true),
        query('cpf').optional(true),
        query('email').optional(true),
        query('password').optional(true),
        query('birthDate').optional(true),
        query('gender').optional(true),
        query('professionalIdentification').optional(true),
    ]
}
