const express = require('express')
const app = express()
const db = require("./config/mongodb")
db()



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)