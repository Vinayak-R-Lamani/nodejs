const { add } = require("nodemon/lib/rules");

const num1 = 10;
const num2  = 15;

function addvalue(){
    console.log(`the sum of two number is ${num1 + num2}`);
}

// module.exports.func = addvalue;

addvalue()