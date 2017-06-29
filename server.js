var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/richtext'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/images'));

app.get('/',function(req,res){   
    res.sendFile('index.html');
});

app.listen(3000);

console.log("Running at Port 3000");