const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const routes = require('./routes/api');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
//ninjago-database,'mongodb'-protocol.
mongoose.Promise = global.Promise;//mongoose.promise is depricated


app.use(bodyParser.json());//above because it will get req first to give json data

/*app.use((error, request, response, next) => {
  if (error !== null) {
    return response.json({ 'invalid': 'json' });
  }
  return next();
});*/

//initialize routes

app.use('/api',require('./routes/api'));//here i access routes directly

//error handling middleware
app.use(function(err,req,res,next){
  console.log(err);
});

//handling requests
/*
app.get('/',function(req,res){
    console.log('GET request');
    res.send({name:'radha'});
});
*/

//listen for requests
app.listen(process.env.port || 4000,function(){
  console.log('now listening for requests');
});