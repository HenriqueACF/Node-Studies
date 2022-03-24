import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {ensureAdmin} from "./middlleware/ensureAdmin";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import {CreateComplimentController} from "./controllers/CreateComplimentController";
import {ensureAuthenticate} from "./middlleware/ensureAuthenticate";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController()
const authenticateController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle);
router.post('/login', authenticateController.handle)
router.post('/compliments', ensureAuthenticate, createComplimentController.handle)

export { router };