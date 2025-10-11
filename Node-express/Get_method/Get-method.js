const express =require('express');
const app=express();

const people=require('./router/people')
const auth=require('./router/auth');

app.use(express.static('./method-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/Login',auth);
app.use('/api/people',people);

//post method





app.listen(5000,()=>{

    console.log("I M listening....");
})