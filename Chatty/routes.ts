import {Router} from "express";
import {SettingsController} from "./src/controllers/SettingsController";
import {UserController} from "./src/controllers/UserController";


export const routes = Router()

const settingsController = new SettingsController()
const userController = new UserController()

routes.post('/settings', settingsController.create)
routes.post('/users', userController.create)