import {Router} from 'express'

const router = Router()

router.get('/ping', (req, res)=>{
    res.json({pong:true})
})

router.get('/random', (req, res) =>{
    const nRand: number = Math.floor(Math.random() *10)
    res.json({number: nRand})
})

router.get('/nome/:nome', (req, res)=>{
    const nome: string = req.params.nome
    res.json({nome})
})

export  default router
