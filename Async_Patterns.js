const {readFile}= require('fs')

const getpath = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })

    
}


const start = async() =>{
    try {
        const first = await getpath('./contents/first.txt')
        const second = await getpath('./contents/second.txt')
        console.log(first+"\n"+second);
    } catch (error) {
        console.log('no such directory');
    }
}

start()
// getpath('./contents/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))