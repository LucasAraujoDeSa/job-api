import 'dotenv/config'
import 'reflect-metadata'
import cors from 'cors'
import '../../container'
import express, { json } from 'express'
import '../typeorm/connection'
import router from './routers/index.routes'

const app = express()
app.use(json())
app.use(cors())
app.use(router)

app.listen(process.env.PORT || 8000,()=>{console.log('run!! ')})
