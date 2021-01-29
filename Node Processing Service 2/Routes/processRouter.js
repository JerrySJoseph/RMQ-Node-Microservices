const router=require('express').Router();
const Queue =require('../Utils/RMQConnection')

//default Route
router.get('/',(req,res)=>{
    res.send("Route is working. Not event is triggered NOw");
})

router.get('/trigger',(req,res)=>{
    res.send('Triggered Event')
    
    Queue.getQueue().createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'hello';
    var msg = 'Hello world';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });

})




module.exports=router;