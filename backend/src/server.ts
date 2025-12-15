import express  from 'express';
import type {Request,Response} from 'express';
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/api/health',(req:Request,res:Response)=>{
    res.status(200).json({message:"Success"})
})
app.listen(3000,()=>console.log('Server started on port 3000'));