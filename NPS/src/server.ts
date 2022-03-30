import express, {Request, Response} from 'express'

const app = express()

app.get('/',(req: Request, res: Response) => {
    return res.send('teste get')
})

app.post('/',(req: Request, res: Response) => {
    return res.json({message: 'Dados salvos com sucesso'})
})

app.listen(3000, () => console.log('Server is Running on PORT:3000!'))