

// //importing the name and function form the directory of nmae and funcion
// const names =require(`./1-names`)
// const sayhi=require(`./2-sayhi`)
// const data=require('./3-alternative-favour')

// // console.log(data.items[0])

// // sayhi(names.susan)
// // sayhi(names.jhon)
// // sayhi(names.peter)

// require('./4-mind-grenade');
// console.log("hello")

const http=require('http');

const server=http.createServer((res,req)=>{
res.write("hello hi ")
res.end()
})

server.listen(()=>{
    console.log("port listening 5000....")
})