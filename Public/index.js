import express from 'express'
import mondodb from 'mongodb'
import path from 'path'
import mongoose from 'mongoose'


const app = express()
const port = 4000
const dirname = path.resolve()

const start = async() =>{
    try{
        app.use(express.static('views'))
        await mongoose.connect('mongodb+srv://arif:nastia23102010@cluster0.equguvu.mongodb.net/?retryWrites=true&w=majority')
        app.use(express.static(path.resolve(dirname,'public')))
        app.set('views', path.resolve(dirname, 'public'))
        app.set('public engine', 'ejs')
    app.get('/', (req, res, next) =>{
    })
    app.post('/',(req, res, next) =>{
        res.send('post')
    })
    app.listen(port, ()=>{
        console.log('Work');
    })
    }catch (error){
        console.log(error)
    }
}
start()