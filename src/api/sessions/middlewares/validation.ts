import { body, query } from 'express-validator';

export const validateCreate = () => {
    return [
        body('professional').isString().isUUID().exists(),
        body('patient').isString().isUUID().exists(),
        body('resourse').isString().isUUID().exists(),
        body('scheduledDate').isISO8601().exists(),
        body('status').isNumeric().exists(),
        body('theme').isString().exists(),
        body('duration').isNumeric().exists(),
        body('type').isNumeric().exists(),
    ]
}

export const validateFilter = () => {
    return [
        query('professional').optional(true),
        query('patient').optional(true),
        query('theme').optional(true),
        query('resourse').optional(true),
        query('status').optional(true),
        query('type').optional(true),
    ]
}
