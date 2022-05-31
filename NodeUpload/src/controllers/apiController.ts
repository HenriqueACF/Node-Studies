import { Request, Response } from 'express';
import sharp from 'sharp'
import {unlink} from 'fs/promises'

export const uploadFile = async ( req: Request, res: Response) => {

    if(req.file){
        const fileName = `${req.file.filename}.jpg`
        await sharp(req.file.path)
            .resize(100)
            .toFormat('jpeg')
            .toFile(`./public/media/${fileName}`)

        //DELETANDO IMAGENS TEMPORARIAS
        await  unlink(req.file.path)

        res.send({image: `${fileName}.jpg`})
    } else {
        res.status(400)
        res.json({error: 'Arquivo inválido'})
    }

    console.log('FILE',req.file)
    console.log('FILES', req.files)
}
