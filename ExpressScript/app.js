const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Ashish ji k xa");

});


app.listen(8040, () => { console.log("port listing") });