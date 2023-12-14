const { log } = require('console');
const path = require('path')
console.log('foo\\bar\\baz'.split(path.sep));
let fileinfo = path.join('/JavaScript','myfile','text.txt');
let filejoin = path.join('/foo','/bar','/hello','abcd');
console.log(filejoin);
console.log(fileinfo);
const base = path.basename(fileinfo);
console.log(base);

const absolute = path.resolve(__dirname,'JavaScript','myfile','text.txt')
console.log(absolute);