import { findCountryPhones } from "@/controllers/countryPhone.controller";

const countryPhoneRouter = require("express").Router();
countryPhoneRouter.get("/", findCountryPhones);
export default countryPhoneRouter;