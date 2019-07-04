var express = require("express");
var path = require("path");

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/api', (req, res) => res.json({ application: 'Reibo collection' }));

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];


app.get("/contact", function(req,res){
  //res.send("whatever");
  app.render("contact",  (err, html) => {res.send(html);});
});

// Redirect all the other resquests
app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
      res.sendFile(path.resolve(`../dist/${req.url}`));
    } else {
      res.sendFile(path.resolve('../dist/index.html'));
    }
  });




app.listen(3000, function(){
    console.log("Server Started!");
})

/*
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(4200); //the server object listens on port 4200


*/