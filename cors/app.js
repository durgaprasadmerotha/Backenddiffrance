
const express = require('express')
const app = express()
const ExpressSession = require('express-session');
const port = 3000

const cors = require('cors');

// app.use(cors()); issay apna pura router per cors lag gaya h agar aap nahi chate ki puri application per cors lage
// aap alag say set krr sakte h.

app.use(ExpressSession({
    resave: false,
    saveUninitialize: false,
    secret: 'hoooray!' 
}))


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  


// app.get('/cors-route',cors(), (req, res, next) => {  
//   console.log('fff');
  
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})