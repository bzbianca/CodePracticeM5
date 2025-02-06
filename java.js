
// NOTE: TO SEE THE JAVASCRIPT CODE, OPEN WITH LIVE SERVER AND CHECK THE CONSOLE.

// Challenge 1:

// a. Write a program in Javascript that checks if a number is even or odd.

let numEvenOdd = 5;

if (numEvenOdd % 2 === 0) {
    console.log("Even.");
} else {
    console.log("Odd.");
}

// b. Write a program in Javascript that checks if a person is eligible to vote based on their age.

let ageUser = 18;

if (ageUser >= 18) {
    console.log("You are old enough to vote.");
} else {
    console.log("You are ineligible to vote.");
}

// c. Write a program in Javascript that checks if a number is positive, negative, or zero, and displays the appropriate message.

let checkTheNumber = -1;

if (checkTheNumber == 0) {
    console.log("This number is 0.");
} else if (checkTheNumber > 0) {
    console.log("This number is positive.");
} else {
    console.log("This number is negative.");
}


// Challenge 2:
// a. Write a program in Javascript that prints numbers from 1 to 10 using a for loop.

for(let i = 1; i < 10; i++) {
    console.log(i);
}

// b. Write a program in Javascript that prints numbers from 1 to 5 using a while loop.

let countTo = 1;

while(countTo <= 5) {
    console.log(countTo);
    countTo += 1;
}

// c. Write a program in Javascript that calculates the factorial of a given number using a loop.

let findFactor = 5;
let result = findFactor;

for(let i = 1; i < findFactor; i++) {
    result *= i;
}
console.log(result);


// Challenge 3:
// a. Write a function in Javascript that greets a user by name.

let userName = prompt("What's your name?");

function greetUser(name) {
    console.log(`Hello, ${userName}. How are you?`);
}

greetUser(userName);

// b. Write a function in Javascript that checks if a number is even or odd.

let numberCheck = 10;

function checkNumber() {
    if (numberCheck % 2 === 0) {
        console.log("Even.");
    } else {
        console.log("Odd.");
    }
}

checkNumber()

// c. Write a function in Javascript that accepts a string and returns the number of vowels in the string.

let vowels = ['a', 'e', 'i', 'o', 'u'];
checkWord = String(prompt("Enter a string:"));
countVowels = 0;
function checkTheVowel() {
    for(let i = 0; i < checkWord.length; i++) {
        for(let e = 0; e < vowels.length; e++) {
            if (checkWord[i].toLowerCase() == vowels[e]) {
                countVowels += 1;
            }
        }
    }
    return countVowels;
}

console.log("Vowel Count: " + checkTheVowel());

// Challenge 4:
// a. Write a program in Javascript that stores a list of fruits and prints each fruit using a loop.

let fruits = ['watermelon', 'pineapple', 'apple', 'strawberry'];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. Write a program in Javascript that stores student names and their grades in a dictionary, and prints each student's name and grade.

let gradeOfStudents = {'Bianca' : 96, 'Angel' : 56, 'Marcus' : 31, 'Maddie' : 100};

for(let name in gradeOfStudents) {
    console.log(`Name: ${name}, Grade: ${gradeOfStudents[name]}`);
}

//c. Create an array of numbers in Javascript and write a function to find the highest number in the array.

let array = [[1, 2, 3, 4], [25, 50, 75, 100], [4, 8, 16, 32]];
resultOfArray = 0

function arrayOfNumbers() {
    for (i = 0; i < array.length; i++) {
        smallArray = array[i]
        for (x = 0; x < smallArray.length; x++) {
            if(array[x] > resultOfArray) { 
                resultOfArray = smallArray[x]
            }
        }
    }
    return resultOfArray
}

console.log(arrayOfNumbers())