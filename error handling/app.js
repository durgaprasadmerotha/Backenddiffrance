

const express = require("express");
const app = express();

app.get('/', (req, res, next) => {
    try {
        const hey = "Hello, World!";  // Define 'hey' or replace with a string
        res.send(hey);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something went wrong');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
