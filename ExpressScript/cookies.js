const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.listen(3000, () => { })
app.use(cookieParser());


const createToken = (req, res) => {
    const token = jwt.sign({ id: "ashish" }, "thisismysecretkey");
    return token;
}

createToken();

app.get("/", (req, res) => {
    res.cookie("jwt", createToken(), {
        httpOnly: true
    });
    res.send("Welcome");
});

app.get("/getCookie", (req, res) => {
    console.log(req.cookies.jwt);
    res.send("Your cookie is:" + req.cookies.jwt);
});


