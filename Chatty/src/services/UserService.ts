import {getCustomRepository} from "typeorm";
import {UsersRepository} from "../repositories/UsersRepository";

export class UserService{
    async create(email: string){
        const usersRepository = getCustomRepository(UsersRepository)
        //VERIFICA SE O USUARIO EXISTE
        const userExistis = await usersRepository.findOne({
            email
        })

        //SE EXISTE RETORNA USER
        if(userExistis){
            return userExistis
        }

        const user = usersRepository.create({
            email
        })

        await usersRepository.save(user)
        //SE NAO EXISTE SALVA NO DB
        return user

    }
}