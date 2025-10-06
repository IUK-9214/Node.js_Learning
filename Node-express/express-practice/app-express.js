const express=require('express')
const path = require('path')
const app=express();


app.get('/',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'../Nav-bar/index.html'))
})

app.use(express.static('./public'))

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
