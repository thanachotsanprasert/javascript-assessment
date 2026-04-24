It hard to type in Thai and change to English for coding so i will type all in English kub.

The Idea
Instead of making the map and action to move to find the hat i prefer to change to make the table and the funcstion that keep the table which we can move and input data.

So the way of making will use the same format as Khun Kan request but in different theme.

step

1 i will create mock data to "variable" to hold my array 
2 i created buleprint dataTable
3 i declare myDatabase and use = new DataTable to keep new input that will use buleprint dataTable
4 i make new command update(row, col, value) which will ask for 3 data
5 i override "aa" to become "bb" by this 2 line 

    update(row, col, value) {
        this.table[row][col] = value;

myDatabase.update(1, 2, "bb");

6 i add delete function and add this.table.splice(rowIndex, 1); to delete a row

