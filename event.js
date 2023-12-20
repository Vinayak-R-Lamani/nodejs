const {readFile,writeFile}= require('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



const start = async() =>{
    try {
        const first = await readFile('./contents/first.txt','utf8')
        const second = await readFile('./contents/second.txt','utf8')
        // await writeFilePromise('./contents/result1.txt',`this some confusing for me :${first} and ${second}`)
        console.log('the file was created');
        console.log(first+"\n"+second);
    } catch (error) {
        console.log(error);
    }
}

start()
// const getpath = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })

    
// }
// getpath('./contents/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))