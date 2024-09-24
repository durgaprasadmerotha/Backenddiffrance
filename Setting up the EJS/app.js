

const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;




app.set('view engine', 'ejs');
app.use(ExpressSession({
    secret: 'hoooray!',  // किसी भी स्ट्रिंग का उपयोग करें जिसे आप छुपाना चाहें
    resave: false,          // हर रिक्वेस्ट के बाद सेशन को फिर से सेव न करें
    saveUninitialized: false, // बिना modification के सेशन को स्टोर न करें
  
  }));

 
  app.get('/',(req, res) => {
    res.render('index')
  })


  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });