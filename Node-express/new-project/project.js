const express=require('express')
const app =express();
const {data}=require('./project-data');


app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home Page</h1><a href="/api/place">places</a>     <br>  <a href="/api/place">single place</a> ');

})

app.get('/api/place',(req,res)=>{

    const newdata=data.map((dat)=>{
        const{id,name,image}=dat;
        return{id,name,image};
    });

    res.json(newdata);
})

app.get(('/api/place/:PlaceId'),(req,res)=>{

    const {PlaceId}=req.params;

const singlePlace=data.find((data)=>data.id===String(PlaceId))

if(!singlePlace){
    res.status(404).send('Place  does not exists')
}

 return res.json(singlePlace);
})

app.get('/api/place/:PlaceId/reviews/:reviewId',(req,res)=>{
    console.log(req.params);
    res.send("hello ibad ")
    
})

app.use((req,res)=>{
    res.status(404).send('<h1>Data Not found<h1>')
})


app.listen(5000,()=>{
    console.log("I m listening Dont worry Buddy....");
})