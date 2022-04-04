import {Request, Response} from "express";
import {getCustomRepository, Not, IsNull} from "typeorm";
import {Survey_UserRepository} from "../repository/Survey_UserRepository";


export class NPSController{
    async execute(req: Request, res: Response){
        const {survey_id} = req.params

        const surveyUserRepository = getCustomRepository(Survey_UserRepository)

        const surveyUsers = await surveyUserRepository.find({
            survey_id,
            value:Not(IsNull())
        })

        const detractor = surveyUsers.filter((survey) => (survey.value >= 0 && survey.value) <= 6).length
        const promoters = surveyUsers.filter((survey) => survey.value >= 9 && survey.value <= 10).length
        const passives = surveyUsers.filter((survey) => survey.value >= 7 && survey.value <= 8).length
        const totalAnswers = surveyUsers.length

        const calculateNPS = Number((((promoters - detractor) / totalAnswers) * 100).toFixed(2))

        return res.json({
            detractor,
            promoters,
            passives,
            totalAnswers,
            NPS: calculateNPS
        })
    }
}
