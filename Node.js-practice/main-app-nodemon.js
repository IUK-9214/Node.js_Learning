// const jhon=`jhon`;
// const peter =`peter`;
// const susan=`susan`;



// //exporting it  to the main-app.js

// module.exports={jhon,peter,susan}
// const http=require('http');

// const server=http.createServer((req,res)=>{
// res.write(`<h1>are you getting me </h1>`)
// res.end()
// return
// })

// server.listen(5000,()=>{
//     console.log("port listening 5000....")
// })

const { readFile,writeFile} = require('fs');
const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)


const start =async()=>{
try {
    const first = await readFilePromise('./content/subpath/text.txt','utf8')
   await writeFilePromise('./content/result.txt','i m there you can see me later ')
   
    
    console.log(first);
     
} catch (error) {
    console.log(error);
    
}
}
start()

// const gettext = (path) => {
//     return new Promise((resolve, reject) => {

//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })

//     })
// }
// gettext('./content/subpath/text.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err));

