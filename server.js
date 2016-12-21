var express = require('express');
var bodyParser = require('body-parser');


var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}));
app.use(static("./public"));

app.get('/',(req, res)=>{
        res.setTimeout(4000, function(){
        res.redirect('/fuckoff');
        });
});
app.get('/fuckoff', (req, res) =>{
    res.sendFile("booty.html", {root:"./public"});
});


app.listen(PORT, (err)=>{
    if(err) {
        console.log("Server error: ", err);
    } else {
        console.log("Server up and running on port: ", PORT);
    }
});