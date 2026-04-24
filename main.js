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

myDatabase.update(1, 2, "bb");

console.log(myDatabase.table)