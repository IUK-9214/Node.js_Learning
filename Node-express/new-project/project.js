const express=require('express')
const app =express();
const {data}=require('./project-data');


app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home Page</h1><a href="/api/place">places</a>     <br>  <a href="/api/place">single place</a> ');

})
// 📍 Get all places
app.get('/api/place',(req,res)=>{

    const newdata=data.map((dat)=>{
        const{id,name,image}=dat;
        return{id,name,image};
    });

    res.json(newdata);
})



// 📍 Get single place by ID
app.get(('/api/place/:PlaceId'),(req,res)=>{

    const {PlaceId}=req.params;
// ✅ Convert both to number for comparison
const singlePlace=data.find((data)=>data.id===String(PlaceId))

if(!singlePlace){
    res.status(404).send('Place  does not exists')
}

 return res.json(singlePlace);
})


//nested route example
app.get('/api/place/:PlaceId/reviews/:reviewId',(req,res)=>{
    console.log(req.params);
    res.send("hello ibad ")
    
})
//query example
app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    const{search,limit}=req.query
    let sortedPlaces=[...data]

    if(search){
        sortedPlaces=sortedPlaces.filter((places)=>{
            return places.name.startsWith(search);
        })
    }
    if (limit){
        sortedPlaces=sortedPlaces.slice(0,Number(limit));

    }
    if(sortedPlaces.length<1){
        return res.status(200).json({sucess:true,data:[]})
    }
   return  res.status(200).json(sortedPlaces);

})

app.use((req,res)=>{
    res.status(404).send('<h1>Data Not found<h1>')
})


app.listen(5000,()=>{
    console.log("I m listening Dont worry Buddy....");
})