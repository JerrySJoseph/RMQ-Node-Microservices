const router=require('express').Router();
const Queue =require('../Utils/RMQConnection')

//default Route
router.get('/',(req,res)=>{
    res.send("Route is working. Not event is triggered NOw");
})

router.get('/consume',(req,res)=>{
    res.send("Consuming event for Service 1")
    Queue.getQueue().createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'service1_queue';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.consume(queue, (msg)=>{
        console.log("recieved : %s", msg.content.toString());
    });
    
  });

})




module.exports=router;