import { body, param } from 'express-validator';

export const emailValidation = body('email')
  .isEmail()
  .withMessage('Invalid email');

export const passwordValidation = body('password')
  .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/)
  .withMessage(
    'Password must have at least 1 figure, 1 upper case letter, 1 lower case letter and minimum length 6 characters',
  );

export const checkExtraFields = body().custom((body) => {
  const allowedKeys = ['title', 'description', 'status'];
  for (const key of Object.keys(body)) {
    if (!allowedKeys.includes(key)) {
      throw new Error(`Unknown property: ${key}`);
    }
  }
  return true;
});

export const titleValidationForCreating = body('title')
  .isString()
  .trim()
  .isLength({ min: 3, max: 30 })
  .withMessage('Title length should be from 3 to 30 characters');

export const descriptionValidationForCreating = body('description')
  .isString()
  .trim()
  .isLength({ min: 3, max: 150 })
  .withMessage('Title length should be from 3 to 150 characters');

export const titleValidation = body('title')
  .optional()
  .isString()
  .trim()
  .isLength({ min: 3, max: 30 })
  .withMessage('Title length should be from 3 to 30 characters');

export const descriptionValidation = body('description')
  .optional()
  .isString()
  .trim()
  .isLength({ min: 3, max: 150 })
  .withMessage('Title length should be from 3 to 150 characters');

export const statusValidation = body('status').optional().isBoolean();

export const paramValid = param('id').toInt().isInt().withMessage('Incoreect todo id');
