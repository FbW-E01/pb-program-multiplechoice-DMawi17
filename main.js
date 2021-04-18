/* 
#### 1. Color Analyzer
Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow). 
*/

let color;
switch (color) {
    case 0:
        color = "\u{1F534}";
        break;
    case 1:
        color = "\u{1F535}";
        break;
    case 2:
        color = "\u{1F7E2}";
        break;
    case 3:
        color = "\u{1F7E1}";
        break;
    default:
        color = "\u{26AA}";
}
console.log(color);

/* 
#### 2. Grading
Create a switch statement that prints different comments depending on a grade.
*/

let grade;
switch (grade) {
    case "A":
        grade = "\u{1F9BE}";
        break;
    case "B":
        grade = "\u{1F4AA}" + "\u{1F3FE}";
        break;
    case "C":
        grade = "\u{1F44F}" + "\u{1F3FE}";
        break;
    case "D":
        grade = "\u{1F641}";
        break;
    case "E":
        grade = "\u{1F97A}";
        break;
    case "F":
        grade = "\u{1F926}" + "\u{1F3FE}";
        break;
    default:
        grade = "F is the lowest we grade around here!";
}
console.log(grade);

/* #### 3. Fruits
Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple). */

let fruits = "banana";
switch (fruits) {
    case "banana":
        fruits = "\u{1F34C}";
        break;
    case "orange":
        fruits = "\u{1F34A}";
        break;
    case "strawberry":
        fruits = "\u{1F353}";
        break;
    case "apple":
        fruits = "\u{1F34E}";
        break;
    default:
        fruits = "\u{1F345}";
}
console.log(fruits);


/* #### 4. Percentage Complete.
* If percentageComplete is below 30, print "Still a long way to go".
* If the percentageComplete is between 30 and 50, print "Slowly getting there".
* If percentageComplete is between 51 and 80, print "You can do it!".
* If percentageComplete is between 81 and 99, print "This is the last push!".
* If percentageComplete is 100, print "You're there. Well done!".
*/

let percentageComplete = (p = 100);

switch (!false) {
    case p < 30:
        p = "Still a long way to go";
        break;
    case p > 30 && p < 50:
        p = "Slowly getting there";
        break;
    case p > 51 && p < 80:
        p = "You can do it!";
        break;
    case p > 81 && p < 99:
        p = "This is the last push!";
        break;
    case p === 100:
        p = "You're there. Well done!";
}
console.log(p);


/* #### 5. Differences
* When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.
*/

    // when all of the branches depend on the value of the same expression we use switch statement.
    // when you need to execute one of many pieces of code.