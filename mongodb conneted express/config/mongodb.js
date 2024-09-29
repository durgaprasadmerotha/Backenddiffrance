
const mongoose = require('mongoose')


//connected to mongodb

function connect() {
    mongoose.connect("mongodb://0.0.0.0/testdb").then(() => {
        console.log("connected to Monodb");

        
    }).catch((error) => {
        console.log("error connecting to Mongodb");
        console.log(error);
        
        
    })

    
}

module.exports = connect