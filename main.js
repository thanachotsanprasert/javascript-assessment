const tableData = [
    ["id", "email", "name"],
    ["001", "a@a.com", "aa"]       
];

console.log(tableData);

class DataTable {
    constructor(data) {
        this.table = data ;
    }
}

const myDatabase = new DataTable(tableData);

console.log(myDatabase.table)