import express from 'express'
import dotenv  from  'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.status(200).send("Hello")
})

app.listen(PORT, (req, res)=>{
    console.log(`Hi from server using port ${PORT}`)
    console.log(`Access server locally using http://localhost:${PORT}`)
})