import {UserService} from "../services/UserService";
import { Response, Request} from "express";

export class UserController{
    async create(req: Request, res:Response) : Promise<Response>{
        const { email} = req.body

        const userService = new UserService()

        const user = await userService.create(email)

        return res.json(user)
    }
}