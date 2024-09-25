const express = require('express');
const ExpressSession = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false}))



app.use(ExpressSession({
    
    resave: false,  
    saveUninitialized: false,   
    secret: 'hoooray!'   
}));

app.get('/', (req, res) => {
    res.render('index')

})


app.get('/check', (req, res) => {
    console.log(req.query);
    

    res.send('check')

})



app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
    
})