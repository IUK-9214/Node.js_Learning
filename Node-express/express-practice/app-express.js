const express=require('express')
const app=express();


app.get('/',(req,res)=>{

    res.status(200).send('Home page')
})

app.get('/about',(req,res)=>{

    res.status(200).send('About page ')
})

app.use((req, res) => {
  res.status(404).send('<h1>Data Not Found</h1>');
});






app.listen(5000,()=>{

    console.log("Hey i m listening don't worry......");
    
})

//app.get
//app.post
//app.delete
//app.put
//app.all
//app.use
//app.listen
