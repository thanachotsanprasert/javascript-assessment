const readline = require("readline")
const keyboard = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

const tableData = [
    ["id", "email", "name"],
    ["001", "a@a.com", "aa"]       
];

class DataTable {
    constructor(data) {
        this.table = data ;
    }
    update(row, col, value) {
        this.table[row][col] = value;
    }

    addRow(newRowArray) {
        this.table.push(newRowArray);
    }

    deleteRow(rowIndex) {
        this.table.splice(rowIndex, 1);
    }
}


const myDatabase = new DataTable(tableData);

    keyboard.question("Type ID, Email, and Name (separated by commas): ", (answer) => {
        const newRow = answer.split(",");
        myDatabase.addRow(newRow);
        console.log("\n--- NEW TABLE ---");
      console.log(myDatabase.table);
      keyboard.close(); 
});
