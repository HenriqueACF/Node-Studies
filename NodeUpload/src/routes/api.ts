import { Router } from 'express';
import multer from 'multer'

import * as ApiController from '../controllers/apiController';

//CONFIGURAÇÕES PARA FAZER USO DE UM ARAMAZENAMENTO no disco da maquina
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './temp')
    },
    filename: (req, file, cb) =>{
        cb(null, file.fieldname+'-'+Date.now()+'.jpg')
    }
})

//Configurações basicas para realizar o uso da multer
const upload = multer({
    dest: './temp',
    // storage: storageConfig,
    //FILTRO NO UPLOAD
    fileFilter:(req, file, cb) => {
       const allowed: string[] = ['image/jpg', 'imagem/jpeg', 'image/png']
        cb(null, allowed.includes(file.mimetype))
    },
    limits: {fieldSize: 8000000}
})

const router = Router();

//UTILIZA-SE 'SINGLE' QUANDO DESEJO APENAS QUE FAÇA O UPLOAD DE UM ARQUIVO
router.post('/upload', upload.single('avatar'),  ApiController.uploadFile)

//UTILIZA-SE UM ARRAY QUANDO DESEJO FAZER O UPLOAD DE MAIS DE UM ARQUIVO
router.post('/uploadaArray', upload.array('avatars', 2),  ApiController.uploadFile)

// UTILIZA-SE O 'FIELDS' QUANDO DESEJO FAZER O UPLOAD DE DIVERSOS CAMPOS
router.post('/uploadFields', upload.fields([
    {name:'arquivo1', maxCount:1},
    {name:'arquivo2', maxCount:2},
]),  ApiController.uploadFile)

//Storage
router.post('/uploadStorage', upload.single('avatar'),  ApiController.uploadFile)


export default router;
