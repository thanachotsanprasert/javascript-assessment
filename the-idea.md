It hard to type in Thai and change to English while coding so i will type all in English kub.
ขออนุญาตเขียนเป็นภาษาอังกฤษนะครับ เพราะสลับภาษาไปมา ไม่สะดวกเท่าไหร่

the assesment's file is main.js

The Idea

Instead of making the map and action to move and find the hat. i prefer to change the assesment idea to what i can understand which is make the table, data and make the funcstion that can change the data inside (the same idea as making map and able to move)

So i will use what Khun Kan assesment require but from promptsync i will use readline insted.

let start !

step

1 i will create mock "variable" data to hold my array 
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

26 April

8 i add safety check and force user to give  3 answer seperate by comma  if (newRow.length === 3) {
9 i add code to be able to insert multiple line, and be able to stop for exit cli from code
10 i add code to be able to add row, delete row, and delete row.

So now i got the map as table and i can add the data into the table, i can select which row i want to delete and i can exit or stop to go out from the table. In order to add table i need to add 3 item seperate by comma "," so if i add wrongly it wont work.

So i will end my assesment here.

thank you