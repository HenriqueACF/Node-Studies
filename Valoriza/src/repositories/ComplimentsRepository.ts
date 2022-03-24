import {EntityRepository, Repository} from "typeorm";
import {Compliments} from "../entities/compliments";

@EntityRepository(Compliments)
export class  ComplimentsRepository extends  Repository<Compliments>{

}