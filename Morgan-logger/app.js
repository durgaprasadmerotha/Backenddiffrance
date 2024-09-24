const express = require("express")
const app = express()
const ExpressSession = require('express-session')
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(ExpressSession({
    resave: false,
    saveUninitialized: false,
    secret: 'hoooraq!'
}))


app.get('/', (req, res) => {
    res.send('hello world')
})


app.listen(3000, () => {
    console.log('server is running http://local:3000');
    
})