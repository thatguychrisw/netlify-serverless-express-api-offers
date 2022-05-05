import {Request, Response} from "express";
import logger from "./getOffersLogger";

export default (req: Request, response: Response) => {
   logger.onNewRequest()

   response.send('Hello')

   logger.onRequestEnd()
}