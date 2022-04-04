import {Router} from "express"
import {UserController} from "./src/controller/UserController";
import {SurveyController} from "./src/controller/SurveyController";
import {SendMailController} from "./src/controller/SendMailController";
import {AnswerController} from "./src/controller/AnswerController";
import {NPSController} from "./src/controller/NPSController";

//ROUTER
export const router = Router()

//CONTROLLERS
const userController = new UserController()
const surveysController = new SurveyController()
const sendMailController = new SendMailController()
const answerController = new AnswerController()
const npsController = new NPSController()

//USERS ROUTES
router.post('/users', userController.create)

//SURVEYS ROUTES
router.post('/surveys', surveysController.create)
router.get('/surveys', surveysController.show)

//SURVEYS USERS ROUTES
router.post('/sendMail/:survey_id', sendMailController.execute)

//ANSWER ROUTES
router.get('/answers/:value', answerController.execute)
//NPS
router.get('/nps', npsController.execute)