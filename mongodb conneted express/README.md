Mongodb connection and download kare.
mongoose package ko bhi download karna hoga.
express bhi
npm init -y bhi karna h
package download karna hoga there are two package 
express 
mongoose
file banan h app.js
 two folder banana hota h jaise ki models, config
 Fir next step h ki config folder may mongodb.js banana file banana h.
 file may likna h


 config ki mongodb.js may likna h
 
function connect() {
    mongoose.connect("mongodb://0.0.0.0/testdb").then(() => {
        console.log("connected to Monodb");

        
    }).catch((error) => {
        console.log("error connecting to Mongodb");
        console.log(error);
        
        
    })

    
}

module.exports = connect


app.js may likna h
const express = require('express')
const app = express()
const db = require("./config/mongodb")
db()



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
