import { Request, Response } from 'express';

export const uploadFile = async ( req: Request, res: Response) => {

    console.log(req.files)
    res.send('Arquivo enviado')
}
