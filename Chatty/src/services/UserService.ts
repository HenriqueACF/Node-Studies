import {getCustomRepository, Repository} from "typeorm";
import {UsersRepository} from "../repositories/UsersRepository";
import {User} from "../entities/User";

export class UserService{

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository =  getCustomRepository(UsersRepository)
    }

    async create(email: string){
        //VERIFICA SE O USUARIO EXISTE
        const userExistis = await this.usersRepository.findOne({
            email
        })

        //SE EXISTE RETORNA USER
        if(userExistis){
            return userExistis
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user)
        //SE NAO EXISTE SALVA NO DB
        return user

    }
}