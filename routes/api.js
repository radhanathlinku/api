const express = require('express');
const router = express.Router(); //Router object
const Ninja = require('../models/ninja');

//get a list of ninjas from the db
router.get('/ninjas',function(req,res){
    res.send({type:'GET'});
});
//add a new ninja to the db
router.post('/ninjas',function(req,res){
    Ninja.create(req.body).then(function(ninja){
     //1.create new instance of Ninja object and 2.save to db
      /*1.var ninja = new Ninja(req.body);
       2. ninja.save();*/
    res.send('ninja');/*create-mongoose method,Ninja-Model,*/
 });
});

//update a ninja in the db
router.put('/ninjas/:id',function(req,res){
    res.send({type:'PUT'});
});
//delete a ninja from the db
router.delete('/ninjas/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports=router;