import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}


export const uploadFile = async ( req: Request, res: Response) => {

    console.log(req.file)
    res.send('Arquivo enviado')
}
