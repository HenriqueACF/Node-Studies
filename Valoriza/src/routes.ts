import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {ensureAdmin} from "./middlleware/ensureAdmin";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import {CreateComplimentController} from "./controllers/CreateComplimentController";
import {ensureAuthenticate} from "./middlleware/ensureAuthenticate";
import {ListUserSendComplimentsController} from "./controllers/ListUserSenderComplimentsController";
import {ListUserReceiveComplimentsController} from "./controllers/ListUserReciverComplimentsController";
import {ListTagsController} from "./controllers/ListTagsController";
import {ListUsersController} from "./controllers/ListUsersController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController()
const authenticateController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const userListComplimentsSend = new ListUserSendComplimentsController()
const userListComplimentRecive = new ListUserReceiveComplimentsController()
const listTags = new ListTagsController()
const listUsers = new ListUsersController()

//POST
router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle);
router.post('/login', authenticateController.handle)
router.post('/compliments', ensureAuthenticate, createComplimentController.handle)
//GET
router.get('/users/compliments/send', ensureAuthenticate, userListComplimentsSend.handle)
router.get('/users/compliments/recived', ensureAuthenticate, userListComplimentRecive.handle)
router.get('/tags', ensureAuthenticate, listTags.handle)
router.get('/users', ensureAuthenticate, listUsers.handle)

export { router };