import express from 'express'
import "reflect-metadata"

import './database'

const app = express()

// port
app.listen(3000, ()=> console.log(`Server is running`))