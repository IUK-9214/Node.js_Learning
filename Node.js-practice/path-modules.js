const path =require('path')

// console.log(path.sep);

const filepath=path.join('/content','subpath','text.txt'  )

console.log(filepath);

//base path only the output will be the text.txt only
const base = path.basename(filepath)
console.log(base)


// this will give me the  full address of the the directory 
const absolute =path.resolve(__dirname,"/content",'subpath','text.txt');

console.log(absolute);

