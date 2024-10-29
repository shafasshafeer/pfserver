const express = require('express')
const cors = require('cors')
// used to load content of .env file into proccess.env
require('dotenv').config()
const router=require('./routes/router')
require('./dbConnections/connection')


const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads')
)


const PORT =3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`PFServer started at port: ${PORT} and waiting for client request!!!`);
})



// resolving client / browser request (GET/POST/PUT/DELETE) using express
// resolving get request to http://localhost:3000/
pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red;"> PFServer started at and waiting for client request!!! </h1>`)
})


// pfServer.post('/',(req,res)=>{
//     res.status(200).send(`POST REQUEST RECIVED`)

// })


// pfServer.put('/',(req,res)=>{
//     res.status(200).send(`PUT REQUEST RECIVED`)
// })


// pfServer.delete('/',(req,res)=>{
//     res.status(200).send(`DELETE REQUEST RECIVED`)
// })
