

const express = require('express');
const app = express();
const data = require('./data');
const subscirber = require('./models/subscribers.js')

console.log(data);


// Your code goes here

app.get("/subscribers",(req,res)=>{
    subscirber.find().then((sub)=>res.send(sub));
   
});



app.get("/subscribers/names",(req,res)=>{

    subscirber.find().select("name subscribedChannel").then((sub)=>res.send(sub));
});

app.get("/subscribers/:id",(req,res)=>{
    let id = req.params.id;


    subscirber.findById(id).then((sub)=>res.send(sub)).catch((err)=>res.status(400).send({message:err.message}));
})


module.exports = app;






















module.exports = app;
