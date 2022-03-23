import {Request, Response, NextFunction} from "express";

export function ensureAdmin(req:Request, res:Response, next:NextFunction){
    //VERIFICA SE O USUARIO É ADMIN
    const admin = true

    if(admin){
        return next()
    }
    return res.status(401).json({
        error: "Unauthorized, user is not a  ADMIN"
    })
}