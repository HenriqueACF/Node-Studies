import {Request, Response} from "express";
import {getCustomRepository} from "typeorm";
import {UsersRepository} from "../repository/UsersRepository";
import {SurveysRepository} from "../repository/SurveysRepository";
import {Survey_UserRepository} from "../repository/Survey_UserRepository";

export class SendMailController {
    async execute(req: Request, res: Response){

        const {email, survey_id} = req.body

        const usersRepository  = getCustomRepository(UsersRepository)
        const surveysRepository  = getCustomRepository(SurveysRepository)
        const surveysUsersRepository  = getCustomRepository(Survey_UserRepository)

        const userAlreadyExists = await usersRepository.findOne({email})
        if(!userAlreadyExists){
            return res.status(400).json({
                error: 'User already exists!!!!'
            })
        }

        const surveyAlreadyExists = await surveysRepository.findOne({id: survey_id})
        if(!surveyAlreadyExists){
            return res.status(400).json({
                error:'Survey already exists!!!!'
            })
        }

        //SALVAR INFO NA TABELA SURVEYUSER
        const surveyUser = surveysUsersRepository.create({
            user_id: userAlreadyExists.id,
            survey_id
        })
        await surveysUsersRepository.save(surveyUser)

        //ENVIA EMAIL PARA O USER

        return res.json(surveyUser)
    }
}