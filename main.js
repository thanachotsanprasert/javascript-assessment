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

keyboard.question(
  "Type ID, Email, and Name (separated by commas): ",
  (answer) => {
    const newRow = answer.split(",");
    if (newRow.length === 3) {
      myDatabase.addRow(newRow);
      console.log("Saved");
      console.log(myDatabase.table);
    } else {
      console.log("ERROR: You must type exactly 3 things separated by commas.");
    }

    keyboard.close();
  },
);
