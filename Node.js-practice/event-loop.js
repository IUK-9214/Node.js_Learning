

//the concept of event loop 


console.log("i m the first who will be executed ")

setTimeout(()=>{
console.log("i m the second one but i will run late coz  i m asynchronous thank  you ");
},2000);

console.log("i m third i run fast  then second "); 
