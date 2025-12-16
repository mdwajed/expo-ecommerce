import express  from 'express';
import type {Request,Response} from 'express';
import path from "path";
import {env} from "./config/env.js";
import {connectDb} from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(clerkMiddleware())

app.get('/api/health',(req:Request,res:Response)=>{
    res.status(200).json({message:"Success"})
})

const __dirname = path.resolve();

if (env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../admin/dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../admin","dist","index.html"));
    })
}

const startServer=async ()=>{
     await  connectDb()
    app.listen(env.PORT,()=> {
        console.log('Server started on port 3000')
    })
}

startServer()