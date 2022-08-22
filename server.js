import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config';
import usersRouter from './routes/usersRouter.js';
import cors from 'cors';


const db = process.env.BDD_URL
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(usersRouter)

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('conected at 3001');
    }
})

mongoose.connect(db, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to database mongodb (c'est dur....)");
    }
})



