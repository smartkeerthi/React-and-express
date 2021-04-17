import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/routes.js'

//load config
dotenv.config({path:"./config/config.env"})

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use('/api', routes)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))