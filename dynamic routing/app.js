const express = require('express');
const ExpressSession = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;

// express-session को configure करें
app.use(ExpressSession({
   
  resave: false,          // हर रिक्वेस्ट के बाद सेशन को फिर से सेव न करें
  saveUninitialized: false, // बिना modification के सेशन को स्टोर न करें
  secret: 'hoooray!', // true करें अगर आप HTTPS इस्तेमाल कर रहे हों
}));




app.get('/', (req, res) => {
    res.send('heloo')
})


app.get('/profile/:username', (req, res) => {
    const username = req.params.username
    res.send(`${username}'s profile pages`)
})

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
