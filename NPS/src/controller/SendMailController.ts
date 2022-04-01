import {Request, Response} from "express";
import {getCustomRepository} from "typeorm";
import {UsersRepository} from "../repository/UsersRepository";
import {SurveysRepository} from "../repository/SurveysRepository";
import {Survey_UserRepository} from "../repository/Survey_UserRepository";
import SendMailService from "../Services/SendMailService";
import {resolve} from "path";

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

        const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs')

        const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
            where: {user_id: userAlreadyExists.id, value: null},
            relations:['user', 'survey']
        })

        const variables = {
            name: userAlreadyExists.name,
            title: surveyAlreadyExists.title,
            description:surveyAlreadyExists.description,
            id: "",
            link: process.env.URL_MAIL
        }

        if(surveyUserAlreadyExists){
            variables.id = surveyUserAlreadyExists.id
            await SendMailService.execute(email, surveyAlreadyExists.title, variables, npsPath)
            return res.json(surveyUserAlreadyExists)
        }

        //SALVAR INFO NA TABELA SURVEYUSER
        const surveyUser = surveysUsersRepository.create({
            user_id: userAlreadyExists.id,
            survey_id
        })
        await surveysUsersRepository.save(surveyUser)

        //ENVIA EMAIL PARA O USER
        variables.id = surveyUser.id

        await SendMailService.execute(email, surveyAlreadyExists.title, variables, npsPath)

        return res.json(surveyUser)
    }
}