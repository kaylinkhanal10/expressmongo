
const express = require('express')
const app = express()
const connect = require('./db/connect')
const userRoute = require('./routes/users')
app.use(express.json())
connect()
require('dotenv').config()
const port = process.env.PORT
app.use(userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})