import {getCustomRepository} from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories";
import {ComplimentsRepository} from "../repositories/ComplimentsRepository";

interface IComplimentRequest{
    tag_id:string;
    user_sender:string
    user_receiver: string
    message: string
}

export class CreateComplimentService{
    async execute({tag_id, user_sender, user_receiver, message}:IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepository)
        const userRepositories = getCustomRepository(UsersRepositories)
        const userReciverExits = await userRepositories.findOne(user_receiver)

        if(user_sender === user_receiver){
            throw new Error("Incorrect user reciver")
        }

        if(!userReciverExits){
            throw new Error("User reciver does not exixts!")
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment)

        return compliment
    }
}