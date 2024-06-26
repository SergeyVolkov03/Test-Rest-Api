import { validationResult } from 'express-validator';

export function inputValidationMiddleware(req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400).send({ errors: result.array() });
  } else {
    next();
  }
}
