console.log("i m here ")


const {createReadStream,writeFile} =require('fs')

let content ='';
for (let i=0;i<1000;i++){
    content+=`${i}. Sweet Heart\n`;
}


const file=writeFile('./content/result-file.txt',content,(err)=>{
if (err){
    console.log("error writing the file ",err)
    return
}
console.log("file writed")
})



const stream=createReadStream('./content/result-file.txt',)

stream.on('data',(result)=>{
    console.log(result)
})