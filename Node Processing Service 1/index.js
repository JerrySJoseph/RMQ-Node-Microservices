const express=require('express');
const Queue=require('./Utils/RMQConnection')
const serviceRouter1=require('./Routes/service1');
const e = require('express');

const app=express();

const PORT= process.env.PORT || 3001;

Queue.InitQueue((some)=>{
    if(some.success)
        console.log("Queue Connected")
    else
        console.log("Error Connection to QUEUE")
})
//Current Version of the API
const version='v1'

//Routes
app.use(`/api/${version}/service1`,serviceRouter1)

app.listen(PORT,(err)=>console.log("Application has started in PORT:"+PORT))