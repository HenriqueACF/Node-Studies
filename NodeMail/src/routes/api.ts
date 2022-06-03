import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import * as EmailController from '../controllers/emailController'

const router = Router();

// router.post('/register', ApiController.register);
// router.post('/login', ApiController.login);
//
router.post('/contato', EmailController.contato);

export default router;
