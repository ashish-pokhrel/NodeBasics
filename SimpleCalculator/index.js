const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    res.send(req.body.n1);
});

app.listen(8000, () => { console.log("port listing") });