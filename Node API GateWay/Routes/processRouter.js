const router=require('express').Router();
const amqp=require('amqplib/callback_api');

//default Route
router.get('/',(req,res)=>{
    res.send("Recieved Request");
})




module.exports=router;