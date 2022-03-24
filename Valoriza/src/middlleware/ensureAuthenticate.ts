import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";

interface IPayload{
    sub: string
}

export function ensureAuthenticate(req:Request, res: Response, next: NextFunction){
    //REECEBE O TOKEN
    const authToken = req.headers.authorization

    //VALIDA SE O TOKEN ESTA PREENCHIDO
    if(!authToken){
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ")
    try{
   //VALIDA SE FOR VALIDO

     const {sub} = verify (token, "4f93ac9d10cb751b8c9c646bc9dbccb9") as IPayload

    //RECUPERA AS INFORMAÇOES DO USUARIO
        req.user_id = sub
        return  next()
    }catch(err){
        return res.status(401).end()
    }



}