import { createEvent, findEventCategories } from "@/controllers/event.controller";

const eventRouter = require('express').Router();

eventRouter.get('/categories', findEventCategories)
eventRouter.post('/create', createEvent)


export default eventRouter