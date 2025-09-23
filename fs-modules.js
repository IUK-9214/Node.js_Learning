const {writeFileSync,readFileSync}=require('fs')

const first =readFileSync('./content/firstfile.txt','utf8')
const second=readFileSync('./content/subpath/text.txt','utf8')

// console.log(first,second)

const result =writeFileSync("./content/result.txt",`here is the result : ${first},${second}`,{flag:'a'})
