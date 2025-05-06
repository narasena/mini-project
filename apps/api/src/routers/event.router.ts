import { createEvent, findEventCategories, getEvents } from "@/controllers/event.controller";

const eventRouter = require('express').Router();

eventRouter.get('/categories', findEventCategories)
eventRouter.post('/create', createEvent)
eventRouter.get('/',getEvents)


export default eventRouter