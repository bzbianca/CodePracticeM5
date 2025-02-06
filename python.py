# Challenge 1:

# a. Write a program in Python that checks if a number is even or odd.

num = input("Enter a number: ")
num = int(num)

if num % 2 == 0:
    print("Even.")
elif num % 2 != 0:
    print("Odd.")

# b. Write a program in Python that checks if a person is eligible to vote based on their age.

voteAge = input("How old are you?: ")
voteAge = int(voteAge)

if voteAge > 18: 
    print("You are the legal age to vote.")
else:
    print("You are not old enough to vote.")

# c. Write a program in Python that checks if a number is positive, negative, or zero, and displays the appropriate message.

checkNum = input("Enter a number: ")
checkNum = int(checkNum)

if checkNum == 0:
    print("Your number is 0.")
elif checkNum > 0:
    print("Your number is positive.")
elif checkNum < 0:
    print("Your number is negative.")



# Challenge 2:

# a. Write a program in Python that prints numbers from 1 to 10 using a for loop.

for x in range(1, 11):
    print(x)

# b. Write a program in Python that prints numbers from 1 to 5 using a while loop.

i = 1
while i < 6:
    print(i)
    i += 1

# c. Write a program in Python that calculates the factorial of a given number using a loop.

i = int(input("Enter a number: "))
for x in range(1, i):
    i *= x
print(i)


# Challenge 3:

# a. Write a function in Python that greets a user by name.

askName = input("Enter your name: ")

def greetings():
    print("Hello, " + askName + "! How are you?")

greetings()


# b. Write a function in Python that checks if a number is even or odd.

enterNum = int(input("Enter a number: "))

def checkTheNum(num):
    if num % 2 == 0:
        num = "Even."
    elif num % 2 != 0:
        num = "Odd."
    return num

print(checkTheNum(enterNum))

# c. Write a function in Python that accepts a string and returns the number of vowels in the string.

userInput = input("Enter a string: ")
vowels = ["a", "e", "i", "o", "u"]

def countString(string):
    result = 0
    for i in string:
        if i in vowels:
            result += 1
    return string 

print(countString(userInput))


# Challenge 4:

# a. Write a program in Python that stores a list of fruits and prints each fruit using a loop.

fruits = []
while True:
    addFruit = input("Enter a fruit (type x to end): ")
    if addFruit.lower() == "x":
        break
    else:
        fruits.append(addFruit)

for i in fruits:
    print(i)

# b. Write a program in Python that stores student names and their grades in a dictionary, and prints each student's name and grade.

studentsGrades = {'Bianca' : 96, 'Angel' : 56, 'Marcus' : 31, 'Maddie' : 100}
for i, x in studentsGrades.items():
    print(f"Name: {i}, Grade: {x}")

# c. Create an array of numbers in Python and write a function to find the highest number in the array.

numArray = [[1, 2, 3, 4], [25, 50, 75, 100], [4, 8, 16, 32]]

for x in numArray:
    highest = 0 
    for y in x:
        if y > highest:
            highest = y
print(highest)