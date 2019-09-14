const express = require('express')
const port = 8000;

const app = express()
app.use(express.urlencoded())
app.use('/',require('./routes'));
app.use(express.static('assets'))
app.set('view engine','ejs')
app.set('views','./views')


app.listen(port,function(req,res){
    console.log("App Started");
});