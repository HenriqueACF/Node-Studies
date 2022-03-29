import express from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import path from 'path'

//COMPONENTS
import './database/index'
import {routes} from "../routes";


const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))
app.set('views', path.join(__dirname, '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/pages/client', (req, res)=>{
    return res.render('html/client.html')
})

app.get('/pages/admin', (req, res)=>{
    return res.render('html/admin.html')
})

//PROTOCOLO HTTP
export const http = createServer(app)
//PROTOCOLO WEB SOCKET
export const io = new Server(http)

io.on("connection", (socket: Socket) =>{
    console.log(`Connected to Socket.IO ${socket.id}`)
})

app.use(express.json())
//ROUTES
app.use(routes)
