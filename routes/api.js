const express = require('express');
const router = express.Router(); //Router object
const Ninja = require('../models/ninja');

//get a list of ninjas from the db
router.get('/ninjas',function(req,res,next){
    Ninja.find({}).then(function(ninjas){  //find all ninjas
        res.send(ninjas); //if we pass find({"name":"radhanath"}),shows radhanath only
        
    });
});
//add a new ninja to the db
router.post('/ninjas',function(req,res,next){
    Ninja.create(req.body).then(function(ninja){
        /*create-mongoose method,Ninja-Model,*/
     //1.create new instance of Ninja object and 2.save to db
      /*1.var ninja = new Ninja(req.body);
       2. ninja.save();*/
    res.send(ninja);//sends ninja to save in db 
 }).catch(next);//if in req.body an error occur then catch method will find that error
});         //next middleware for error handling

//update a ninja in the db
router.put('/ninjas/:id',function(req,res,next){
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
      Ninja.findOne({_id:req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    });
})    
//delete a ninja from the db
router.delete('/ninjas/:id',function(req,res,next){
    //1.console.log(req.params.id);//shows the id we passin postman in terminal
    //1.res.send({type:'DELETE'});
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

module.exports=router;