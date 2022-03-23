import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import "express-async-errors"
//Routes
import { router } from "./routes";
//DB
import "./database";

const app = express();

app.use(express.json());

app.use(router);

//Middlleware
app.use((err:Error, req:Request,res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error:err.message
        })
    }
    return res.status(500).json({
        status:'error',
        message:'Internal Server Error'
    })
})
//Port
app.listen(3000, () => console.log("Server is running"));