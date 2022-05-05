import {Validator, ValidationError} from "express-json-validator-middleware";

export const validate = new Validator({}).validate

export const requestValidationMiddleware = (error, request, response, next) => {
        if (error instanceof ValidationError) {
            response.status(400).send(error.validationErrors.query);
            next();
        } else {
            next(error);
        }
}

