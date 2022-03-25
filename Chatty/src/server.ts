import express from 'express'
import './database/index'
import {routes} from "../routes";


const app = express()
app.use(express.json())
//ROUTES
app.use(routes)
//PORT
app.listen(3000, () => console.log("Server is running on port 3000"))