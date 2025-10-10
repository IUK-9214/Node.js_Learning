const express =require('express');
const app=express();
let {people}=require('./data-for-get');



app.use(express.static('./method-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.get('/api/people',(req,res)=>{

    res.status(200).send({success:true,data:people});
})
//post method example
app.post('/api/people',(req,res)=>{
    const{name}=req.body
    if(!name){
        res.status(400).json({success:false,msg:"pleaze provide name value"})
    }
res.status(201).json({success:true,person:name})

})

app.post('/api/postman/people',(req,res)=>{
    const{name}=req.body
    if(!name){
        res.status(400).json({success:false,msg:"pleaze provide name value"})
    }
res.status(201).json({success:true,data:[...people,name]})

})


//post method
app.post("/login",(req,res)=>{
let name=req.body.name
if(name){
    res.status(200).send(`Welcome :  ${name} `)
}
else  {  res.status(404).send("please provide name :")}

})


//put method 
app.put('/api/people/:id',(req,res)=>{
    const{id}=req.params
    const {name}=req.body
    

    const person =people.find((person)=>person.id===Number(id))
if(!person){

  return  res.status(404).json({success:false,msg:"please provide name and value"})
}

const newPeople=people.map((person)=>{
    if(person.id===Number(id)){
        person.name=name;
    }
    return person
})

res.status(200).json({success:true, data:newPeople})

})





app.listen(5000,()=>{

    console.log("I M listening....");
})