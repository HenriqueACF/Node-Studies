import {Router} from "express"
import {UserController} from "./src/controller/UserController";

export const router = Router()

const userController = new UserController

router.post('/users', userController.create)