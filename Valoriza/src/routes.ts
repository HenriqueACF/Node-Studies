import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {ensureAdmin} from "./middlleware/ensureAdmin";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import {CreateComplimentController} from "./controllers/CreateComplimentController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController()
const authenticateController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post("/users", createUserController.handle);
router.post('/tags',ensureAdmin, createTagController.handle)
router.post('/login', authenticateController.handle)
router.post('/compliments', createComplimentController.handle)

export { router };