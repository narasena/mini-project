import { createEvent, findEventCategories, getEventByCreatorId, getEventById, getEvents } from "@/controllers/event.controller";
import { verifyToken } from "@/middlewares/auth/verifyToken";

const eventRouter = require('express').Router();

eventRouter.get('/categories', findEventCategories)
eventRouter.post('/create', createEvent)
eventRouter.get('/', getEvents)
eventRouter.get('/my-events', verifyToken, getEventByCreatorId)
eventRouter.get('/:id', getEventById)


export default eventRouter