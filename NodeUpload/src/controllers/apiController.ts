import { Request, Response } from 'express';
import sharp from 'sharp'

export const uploadFile = async ( req: Request, res: Response) => {

    if(req.file){
        await sharp(req.file.path)
            .resize(100)
            .toFormat('jpeg')
            .toFile(`./public/media/${req.file.filename}.jpg`)

        res.send({image: `${req.file.filename}.jpg`})
    } else {
        res.status(400)
        res.json({error: 'Arquivo inválido'})
    }

    console.log('FILE',req.file)
    console.log('FILES', req.files)
}
