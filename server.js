var express = require("express");

var app = express();

app.listen(3000);

app.get("/", function(req, res) {
    res.send("Listening over here @port 3000 :)");
});