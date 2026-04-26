const readline = require("readline");
const keyboard = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tableData = [
  ["id", "email", "name"],
  ["001", "a@a.com", "aa"],
];

class DataTable {
  constructor(data) {
    this.table = data;
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

function askForUser() {

keyboard.question("Choose an action (add / delete / stop): ", (action) => {

if (action === "stop") {
      console.log("\n--- FINAL TABLE ---");
      console.log(myDatabase.table);
      keyboard.close();
      return;
    
  }

  else if (action === "add") {
      keyboard.question("Type ID, Email, and Name (separated by commas): ", (addAnswer) => {
          
          const newRow = addAnswer.split(",");
        
          if (newRow.length === 3) {
              myDatabase.addRow(newRow);
              console.log("\n--- SUCCESS: ROW SAVED ---");
              console.log(myDatabase.table);
          } else {
              console.log("\nERROR: You must type exactly 3 things separated by commas.");
          }
          
          askForUser(); 
          
      })
  }

else if (action === "delete") {
      keyboard.question("Type the row number to delete (e.g., 1): ", (rowAnswer) => {
          const indexToDelete = Number(rowAnswer);
          myDatabase.deleteRow(indexToDelete);
          
          console.log("\n--- SUCCESS: ROW DELETED ---");
          console.log(myDatabase.table);
          
          askForUser(); 
      });
  }

  else {
      console.log("ERROR: I don't understand that command.");
      askForUser(); 
  }


}); 
}

askForUser();