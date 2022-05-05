import express from 'express';
import serverless from 'serverless-http';
import getOffers from "./lib/http/actions/getOffers/getOffers";
import getOffersSchema from "./lib/http/actions/getOffers/getOffersSchema";
import {validate, requestValidationMiddleware} from "./lib/http/requestValidator"

const app = express();
app.use(express.json());

app.get('/offers', validate({query: getOffersSchema}), getOffers)

app.use(requestValidationMiddleware)

export default app;
export const handler = serverless(app);