
const express = require('express')
const app = express()
const ExpressSession = require('express-session');
const cookieParser = required('cookie-parser');        
const port = 3000


// require karna jaruri h cookieParser ko




app.use(ExpressSession({
    resave: false,
    saveUninitialize: false,
    secret: 'hoooray!' 
}))

app.use(cookieParser());
// cookieParser ko bhi chalana




app.get('/', (req, res) => {
    res.cookie("token","12345",)
    // humesha aad rakna ki cookie karte time cookie set karna h or backend pay pay cookies karna h
    res.send('Hello World!')
  })


  app.get('/check-cookie', (req,res,next) => {
    const cookievalue = req.cookie.token;
    // backend may check karne k liye
    res.send(cookievalue);
  })


  app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
  
