import {Router} from "express"
import {UserController} from "./src/controller/UserController";
import {SurveyController} from "./src/controller/SurveyController";
import {SendMailController} from "./src/controller/SendMailController";

//ROUTER
export const router = Router()

//CONTROLLERS
const userController = new UserController()
const surveysController = new SurveyController()
const sendMailController = new SendMailController()

//USERS ROUTES
router.post('/users', userController.create)

//SURVEYS ROUTES
router.post('/surveys', surveysController.create)
router.get('/surveys', surveysController.show)

//SURVEYS USERS ROUTES
router.post('/sendMail', sendMailController.execute)