import { findEventCategories } from "@/controllers/event.controller";

const eventRouter = require('express').Router();

eventRouter.get('/categories', findEventCategories)


export default eventRouter