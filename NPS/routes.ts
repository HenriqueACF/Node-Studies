import {Router} from "express"
import {UserController} from "./src/controller/UserController";
import {SurveyController} from "./src/controller/SurveyController";

export const router = Router()

const userController = new UserController()
const surveysController = new SurveyController()

//USERS ROUTES
router.post('/users', userController.create)

//SURVEYS ROUTES
router.post('/surveys', surveysController.create)
router.get('/surveys', surveysController.show)