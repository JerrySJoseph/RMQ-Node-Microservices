const router=require('express').Router();
const Queue =require('../Utils/RMQConnection')

//default Route
router.get('/',(req,res)=>{
    res.send("Route is working. Not event is triggered NOw");
})

router.get('/pubservice1',(req,res)=>{
    res.send('Triggered Event for Service 1')
    
    Queue.getQueue().createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'service1_queue';
    var msg = 'Hi to Service 1';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });

})
router.get('/pubservice2',(req,res)=>{
    res.send('Triggered Event for Service 1')
    
    Queue.getQueue().createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'service2_queue';
    var msg = 'Hi to Service 2';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });

})
router.get('/pubservice3',(req,res)=>{
    res.send('Triggered Event for Service 1')
    
    Queue.getQueue().createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'service3_queue';
    var msg = 'Hi to Service 3';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });

})




module.exports=router;