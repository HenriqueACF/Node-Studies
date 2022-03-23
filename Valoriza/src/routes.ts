import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {ensureAdmin} from "./middlleware/ensureAdmin";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController()
const authenticateController = new AuthenticateUserController()

router.post("/users", createUserController.handle);
router.post('/tags',ensureAdmin, createTagController.handle)
router.post('/login', authenticateController.handle)

export { router };