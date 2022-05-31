import { Request, Response, NextFunction } from 'express'
export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) => {
        const success = false
        //TODO -> fazer verificação do auth
        if (success) {
            next()
        } else {
            res.status(401)
            res.json({error: 'Usuario nao autorizado.'})
        }
    }
}
