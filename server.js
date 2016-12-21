var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var PORT = process.env.PORT || 3000;
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/ExpressMVC', (error)=>{
    if(error) {
        console.log("Error connecting to database!");
    } else {
        console.log("Connected to database!");
    }
});

app.get('/',(req, res)=>{
        res.setTimeout(4000, function(){
        res.sendFile('index.html', {root:"./public"} );
        });
});

app.listen(PORT, (err)=>{
    if(err) {
        console.log("Server error: ", err);
    } else {
        console.log("Server up and running on port: ", PORT);
    }
});