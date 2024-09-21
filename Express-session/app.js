const express = require("express")
const expressSession = require("express-session")
const app = express()


app.use(expressSession({
    secret: "Bahut secret hai",
    resave: false,
    saveUninitialized: false

}))

app.get('/', (req, res) => {

    req.session.name = "Amit";

    res.send("hello world");

   
        
    })
    app.get('/check',(req, res, next) => {
        console.log(req.session.name);
        res.send("check")


})

app.listen(3000, () => {
    console.log("server started at http://localhost:3000");
    
})