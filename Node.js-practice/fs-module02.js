const { readFile, writeFile } = require('fs')

readFile('./content/firstfile.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/subpath/text.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;


        writeFile('./content/result-file .txt',
            `this is the result : ${first} , ${second}`, (err, result) => {
                if (err) {
                    console.log(err);

                    return
                }
                console.log(result);
            }
        )
    })
})