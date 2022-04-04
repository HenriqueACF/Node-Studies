import {Request, Response} from "express";
import {getCustomRepository} from "typeorm";
import {Survey_UserRepository} from "../repository/Survey_UserRepository";
import {AppError} from "../errors/appErrors";

export class AnswerController{
    async execute(req: Request, res: Response){
        const { value } = req.params
        const {u} = req.query

        const surveyUserRepository = getCustomRepository(Survey_UserRepository)

        const surveyUser = await surveyUserRepository.findOne({
            id:String(u)
        })

        if(!surveyUser){
            throw new AppError("Survey User does not exist!")
        }

        surveyUser.value = Number(value)

        await surveyUserRepository.save(surveyUser)

        return res.json(surveyUser)

    }
}