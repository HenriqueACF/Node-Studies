import {EntityRepository, Repository} from "typeorm";
import {Survey} from "../model/Survey";

@EntityRepository(Survey)
export class SurveysRepository extends Repository<Survey>{

}