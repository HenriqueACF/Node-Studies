import { Router } from 'express';
import multer from 'multer'

import * as ApiController from '../controllers/apiController';

//Configurações basicas para realizar o uso da multer
const upload = multer({
    dest: './temp'
})

const router = Router();

router.post('/upload', upload.single('avatar'),  ApiController.uploadFile)


export default router;
