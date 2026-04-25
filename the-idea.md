It hard to type in Thai and change to English for coding so i will type all in English kub.
ขออนุญาตเขียนเป็นภาษาอังกฤษนะครับ เพราะสลับภาษาไปมา ไม่สะดวกเท่าไหร่

the use file for the assesment is main.js

The Idea

Instead of making the map and action to move and find the hat. i prefer to change the assesment to the idea i can understand which to make the table as data and make the funcstion that can change the data inside.

So the way of making will use the same format as Khun Kan assesment plan as possible but in different theme.

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

so from this 6 step of the original data below,

    ["id", "email", "name"],
    ["001", "a@a.com", "aa"] 

i able to make blueprint and use update, add row, delete row and splice to manipulate original hardcode data to show other thing.
beside this i still can not do kub.

So this will be my assesment for now.

25 April

7 i continue my assesment, i declare readline funcstion to be able to type in cli

