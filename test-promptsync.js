const prompt = require('prompt-sync')();

// 1. The code stops here. It refuses to move to line 2 until you press Enter.
const userName = prompt("Enter your name: "); 

// 2. This only prints after you finish typing.
console.log("Hello, " + userName);