const readline = require('readline');
const keyboard = readline.createInterface({ input: process.stdin, output: process.stdout });

// 1. The computer asks the question, but it DOES NOT wait. 
keyboard.question("Enter your name: ", (userName) => {
    // 3. This inner block ONLY triggers when the user eventually presses Enter.
    console.log("Hello, " + userName); 
});

// 2. The computer immediately runs this line while the user is still typing!
console.log("I am running while you are typing!");