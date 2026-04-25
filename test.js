// this is my test to see how js run in ram kub not related to the assesment
class DataTable {
    constructor(data) {
        this.table = data;
        // We add a silent tracker
        this.silentUpdates = 0; 
    }
}

const myDatabase = new DataTable([ ["id", "name"], ["001", "aa"] ]);

// Keep the server alive forever
setInterval(() => {
    
    // 1. We interact with the object in the RAM.
    // 2. We change its data.
    // 3. We DO NOT use console.log! The terminal stays 100% blank.
    myDatabase.silentUpdates++; 

}, 2000);