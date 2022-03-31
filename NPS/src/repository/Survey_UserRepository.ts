import {EntityRepository, Repository} from "typeorm";
import {Survey_User} from "../model/Survey_User";

@EntityRepository(Survey_User)
export class Survey_UserRepository extends Repository<Survey_User>{

}