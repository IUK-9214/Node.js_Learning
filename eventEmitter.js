const EventEmitter=require('events');

const customEmitter= new EventEmitter();

customEmitter.on('response',()=>{
    console.log("emitted like Raffle aircraft")
})
customEmitter.emit('response') 