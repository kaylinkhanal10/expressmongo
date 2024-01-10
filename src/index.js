
const express = require('express')
const app = express()
//connect function uses mongoose.connect to connect to db
const connect = require('./db/connect')

//userRoute specifies endpoints that can be hit for the users, /users-> get /users/:id 
const userRoute = require('./routes/users')
//to parse req.body into plain object/json
app.use(express.json())

connect()

//use external .envs in the project
require('dotenv').config()
const port = process.env.PORT
app.use(userRoute)

// to listen to a specific port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})