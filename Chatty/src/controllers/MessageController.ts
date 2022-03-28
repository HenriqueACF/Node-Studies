import {Request, Response} from "express";
import {MessageService} from "../services/MessageService";

export class MessageController {
    async create(req: Request, res: Response){
        const {admin_id, text, user_id} = req.body

        const messageService = new MessageService()

        try{
            const message = await messageService.create({admin_id, text, user_id})
            return res.json(message)
        } catch(err){
            return res.status(400).json({
                message: err.message
            })
        }
    }
    async showByUser(req: Request, res: Response){
        const {id} = req.params

        const messageService = new MessageService()

        const list = await messageService.listByUser(id)

        return res.json(list)
    }
}