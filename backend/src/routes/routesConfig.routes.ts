import { Express, Request, Response } from 'express'
import transactionR from './transactions.routes'
import  authR  from './auth.routes'
export const routesInit = (app:Express) => {
    app.use('/auth',authR)
    app.use('/transactions',transactionR)
    app.use((req:Request, res:Response) => {
        res.status(404).json({ msg_err: 'Not Found 404' })
    })

}