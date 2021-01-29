const express=require('express');
const processRouter=require('./Routes/processRouter');
const app=express();

const PORT= process.env.PORT | 3000;

//Current Version of the API
const version='v1'

//Routes
app.use(`/api/${version}/process`,processRouter)

app.listen(PORT,(err)=>console.log("Application has started in PORT:"+PORT))