import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerConfig from './config/swagger'
import initDataBase from './database/database'

import usersRouter from './routes/user.router'
import regionsRouter from './routes/region.router'

initDataBase()
const app = express()
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
app.use('/users', usersRouter)
app.use('/regions', regionsRouter)

app.listen(3000, () => {
    console.log('🎉 - Servidor Online !')
    console.log('\x1b[34m%s\x1b[0m', '🔗 - http://localhost:3000')
    console.log('\x1b[33m%s\x1b[0m', '📃 - http://localhost:3000/api-docs')
})
