const { log } = require('console')
const os = require('os')

//info about current user

const user  = os.userInfo()
console.log(user)

// method returns the system uptime in second;

console.log(`the system uptime is ${os.uptime()} second`);


const current = {
    name :os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}


console.log(current);

const os = require('os');
const { log } = require('console');

//console.log(os.homedir());
//console.log(os.hostname());
// console.log(os.userInfo());
console.log(os.machine());
console.log(os.networkInterfaces());

console.log(os.uptime());

console.log(os.cpus());