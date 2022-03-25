import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    return res.send("Teste get")
})

app.post('/', (req, res)=>{
    return res.json({
        message:'teste post'
    })
})

app.listen(3333, () => console.log("Server is running on port 3333"))