import { Request, Response } from 'express';

import { Product } from '../models/Product';
import  User  from '../models/User'

export const home = async (req: Request, res: Response)=>{
    //INSERINDO USUARIO
    const newUser = new User()
    newUser.name={firstName:'Henrique', lastName:'Freitas'}
    newUser.email='henrique@freitas.com'
    newUser.age = 25
    newUser.interests = ['pizza', 'sorvete']
    const result = await newUser.save()
    console.log('novo usuario', result)

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Henrique',
        lastName: 'Assis',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};
