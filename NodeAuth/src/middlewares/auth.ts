import { Request, Response, NextFunction } from 'express'
import { User } from '../models/User'
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const Auth = {
    private: async(req: Request, res: Response, next: NextFunction) => {
        let success = false
        //TODO -> fazer verificação do auth com basic auth
        console.log(req.headers.authorization)

        //BASIC AUTH
        // if(req.headers.authorization){
        //     const hash: string = req.headers.authorization.substring(6)
        //     const decoded: string = Buffer.from(hash, 'base64').toString()
        //     const data: string[] = decoded.split(':')
        //
        //     if( data.length === 2 ){
        //         const hasUser = await User.findOne({
        //             where:{
        //                 email: data[0],
        //                 password: data[1]
        //             }
        //         })
        //
        //         if(hasUser) success = true
        //     }
        // }

        //TODO -> fazer verificação do auth com JWT
        if(req.headers.authorization){
            const [authType, token] = req.headers.authorization.split('')
            if(authType === 'Bearer'){
                try{
                    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY as string)

                    console.log('decoded', decoded)
                    success = true
                } catch (err){

                }

            }
        }

        if (success) {
            next()
        } else {
            res.status(401)
            res.json({error: 'Usuario nao autorizado.'})
        }
    }
}
