import  express  from 'express'
import { Sequelize } from 'sequelize'
import 'dotenv/config'

import {connectDatabase} from './models/index.js'

const PORT = process.env.PORT || 8000

const app = express();

//midddlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(cookieParser())




connectDatabase();
app.listen(PORT,()=>{


    
    
    
    console.log(`server started at ${PORT}`)

})
