import {Router} from "express";
import {SettingsController} from "./src/controllers/SettingsController";
import {UserController} from "./src/controllers/UserController";
import {MessageController} from "./src/controllers/MessageController";


export const routes = Router()

const settingsController = new SettingsController()
const userController = new UserController()
const messageController = new MessageController()

routes.post('/settings', settingsController.create)

routes.post('/users', userController.create)

routes.post('/messages', messageController.create)
routes.get('/messages/:id', messageController.showByUser)