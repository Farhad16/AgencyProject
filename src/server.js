const express     = require('express');
const bodyParser  = require('body-parser');

const api       = require('./app/server/routes/api');

const port        = 3000;

const app         = express();
//CROS permission
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',api);

app.get('/',function(req,res){
    res.send('Hello from server');
})


app.listen(port, function(){
    console.log('app listening on port '+ port);
})