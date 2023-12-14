const { log } = require('console');
const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./contents/first.txt','utf8');
const second = readFileSync('./contents/second.txt','utf8');


writeFileSync(
    './contents/result.txt',
    `here is the result :${first}, ${second}`,
    {flag : 'a'}
)

console.log('done with this task');
console.log('starting the next one');