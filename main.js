const tableData = [
    ["id", "email", "name"],
    ["001", "a@a.com", "aa"]       
];

console.log(tableData);

class DataTable {
    constructor(data) {
        this.table = data ;
    }
    update(row, col, value) {
        this.table[row][col] = value;
    }
}

const myDatabase = new DataTable(tableData);

myDatabase.update(1, 2, "bb");

console.log(myDatabase.table)