Assignment : Conditional Statements
A] if Statement
Write a program to check if a number is divisible by 5. If yes, print “Divisible by 5”.

Check if a person’s age is greater than or equal to 60. If true, print “Senior Citizen”.

Write a program that checks if a given number is greater than 100. If yes, print “Big Number”.

Check if the temperature is less than 10. If true, print “Very Cold”.

Write a program to check if a student scored full marks (100). If yes, print “Perfect Score”.

Check if a number is negative. If it is, print “Negative Number”.

Write a program that checks if a user has entered an empty string. If the string is empty, print “No input provided”.

Check if a given year is divisible by 100. If yes, print “Century Year”.

Write a program to check if a number is both positive and even using a single if condition. If true, print “Positive Even Number”.

Check if the value of a variable marks is greater than or equal to 35 and less than or equal to 100. If true, print “Valid Marks”.

Answer:
1.
let num = 15
if(num % 5 ==0){
    console.log("Divisible by 5")
}

2.
let age = 60;
if(age >= 60){
    console.log("Senior Citizen")
}

3.
let num = 102;
if(num > 100){
    console.log("Big Number")
}

4.
let temperature = 5;
if(temperature <10){
    console.log("Very Cold")
}

5.
let marks =100;
if (marks == 100){
    console.log("Perfect Score")
}

6.
let num = -1;
if (num<0){
    console.log("Negative Number")
}

7.
let x = "";
if (x==""){
    console.log("No input provided")
}

8.
let year = 2000;
if(year%100==0){
    console.log("Century Year")
}

9.
let num =12;
if (num %2==0 && num>=0){
    console.log("Positive Even Number")
}

10.
let marks=39;
if(35<=marks<100){
    console.log("Valid Marks")
}

B] if...else Statement
Write a program to check whether a number is even or odd.

Check if a person is eligible to vote (age ≥ 18). Print “Eligible” or “Not Eligible”.

Write a program that checks whether a number is positive or negative.

Check if a student has passed or failed based on marks (pass mark = 35).

Write a program to check whether a given character is an uppercase letter or not.
(Hint: Use character comparison)

Check if a number is divisible by 3 or not. Print appropriate messages.

Write a program that takes a password as input. If the password is “admin123”, print “Login Successful”, otherwise print “Incorrect Password”.

Check whether a given year is a leap year or not using the basic rule (divisible by 4).

Write a program to find the greater of two numbers using if...else.

Check if a number is positive, negative, or zero using only if...else (you may use nested or multiple conditions carefully).

Answer:
1.
let num = 4;
if(num%2==0){
    console.log("Even Number")
}else{
    console.log("Odd Number")
}

2.
let age = 35;
if(age>=18){
    console.log("Eligible")
}else{
    console.log("Not Eligible")
}

3.
let num = 1;
if (num>=0){
    console.log("positive number")
}else{
    console.log("Negative Number")
}

4.
let marks=35;
if(marks>=35){
    console.log("passed")
}else{
    console.log("failed")
}

5.
let ch = "A";
if (ch >= "A" && ch <= "Z") {
    console.log("Uppercase letter");
} else {
    console.log("Not an uppercase letter");
}

6.
let num = 6;
if(num%3==0){
    console.log("Number is divisible by 3")
}else{
    console.log("Number is niot divisible by 3")
}

7.
let password="admin123"
if(password=="admin123"){
    console.log("Login Successful")
}else{
    console.log("Incorrect Password")
}

8.
let year=2026;
if(year%4==0){
    console.log("leap year")
}else{
    console.log("Not a leap year")
}

9.
let a = 10;
let b = 20;
if (a > b) {
    console.log("a is greater");
} else {
    console.log("b is greater");
}

10.
let num = -5;
if (num > 0) {
    console.log("Positive number");
} else {
    if (num < 0) {
        console.log("Negative number");
    } else {
        console.log("Zero");
    }
}

C] if...else if...else Statement
Write a program that takes a month number (1–12) and prints the corresponding season:
Winter (12, 1, 2), Summer (3, 4, 5), Monsoon (6, 7, 8), Autumn (9, 10, 11).

Create a simple tax calculator based on income:
Income < 3,00,000 → No tax
3,00,000 – 7,00,000 → 5% tax
7,00,000 – 10,00,000 → 10% tax
Above 10,00,000 → 15% tax
Print the tax amount.

Write a program that checks a student’s score and prints:
“Outstanding” (90 and above), “Good” (70–89), “Average” (40–69), “Needs Improvement” (below 40).

Check the speed of a vehicle and print:
“Slow” (below 40), “Normal” (40–80), “Fast” (above 80).

Write a program that checks a person’s height (in cm) and prints:
“Short” (< 150), “Average” (150–170), “Tall” (> 170).

Check the day number (1–7) and print whether it is a Weekday or Weekend
(1 to 5 = Weekday, 6 and 7 = Weekend).

Write a program that calculates electricity bill based on units:
0–50 units → ₹2 per unit
51–150 units → ₹4 per unit
Above 150 units → ₹6 per unit
Print the total bill.

Create a program that checks a student’s attendance percentage and prints:
“Excellent” (≥ 90), “Good” (75–89), “Satisfactory” (50–74), “Poor” (< 50).

Write a program that takes three subject marks and finds the highest mark among them using if...else if...else.

Check a number and print one of the following:
“Positive Even”, “Positive Odd”, “Negative Even”, “Negative Odd”, or “Zero”.

Answer:
1.
let month = 2;
if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
}else if (month >= 3 && month <= 5) {
    console.log("Summer");
}else if (month >= 6 && month <= 8) {
    console.log("Monsoon");
}else if (month >= 9 && month <= 11) {
    console.log("Autumn");
}else {
    console.log("Invalid month");
}

2.
let income = 15;
let tax;
if (income < 300000) {
    tax = 0;
}else if (income <= 700000) {
    tax = income * 5 / 100;
}else if (income <= 1000000) {
    tax = income * 10 / 100;
}else {
    tax = income * 15 / 100;
}
console.log("Tax amount = ₹" + tax);

3.
let score = 40;
if (score >= 90) {
    console.log("Outstanding");
}else if (score >= 70) {
    console.log("Good");
}else if (score >= 40) {
    console.log("Average");
}else {
    console.log("Needs Improvement");
}

4.
let speed = 50;
if (speed < 40) {
    console.log("Slow");
}else if (speed <= 80) {
    console.log("Normal");
}else {
    console.log("Fast");
}

5.
let height = 150;
if (height < 150) {
    console.log("Short");
}else if (height <= 170) {
    console.log("Average");
}else {
    console.log("Tall");
}

6.
let day = 4;
if (day >= 1 && day <= 5) {
    console.log("Weekday");
}else if (day == 6 || day == 7) {
    console.log("Weekend");
}else {
    console.log("Invalid day number");
}

7.
let units =40;
let bill;
if(0<=units<=50){
    bill=units*2
}else if(51<=units<=150){
    bill=units*4
}else{
    bill=units*6
}
console.log("the total bill",bill)

8.
let attendance = 45;
if (attendance >= 90 && attendance <= 100) {
    console.log("Excellent");
}else if (attendance >= 75) {
    console.log("Good");
}else if (attendance >= 50) {
    console.log("Satisfactory");
}else if (attendance >= 0) {
    console.log("Poor");
}else {
    console.log("Invalid attendance");
}

9.
let a = 100;
let b = 200;
let c = 300;
if (a >= b && a >= c) {
    console.log("Highest marks = " + a);
}else if (b >= a && b >= c) {
    console.log("Highest marks = " + b);
}else {
    console.log("Highest marks = " + c);
}

10.
let num = 64;
if (num == 0) {
    console.log("Zero");
}else if (num > 0 && num % 2 == 0) {
    console.log("Positive Even");
}else if (num > 0 && num % 2 != 0) {
    console.log("Positive Odd");
}else if (num < 0 && num % 2 == 0) {
    console.log("Negative Even");
}else {
    console.log("Negative Odd");
}

D] Nested if Statement
Check if a number is greater than 10.
If yes, then check whether it is divisible by 3 and print the appropriate message.

Write a program that first checks if a person is 18 or older.
If yes, then check if they have a voter ID. Print “Can Vote” only if both conditions are true.

Check if a student has scored 40 or more marks.
If yes, then check if the score is 80 or above and print “Passed with Distinction”.

Create a simple ATM system:
First check if the PIN is correct.
If PIN is correct, then check if the account balance is sufficient for withdrawal.

Write a program that checks if a year is divisible by 4.
If yes, then further check if it is divisible by 100.
If it is divisible by 100, then check if it is also divisible by 400 to confirm it is a leap year.

Check if a user has entered a valid email (contains “@”).
If yes, then check if the email ends with “.com”.
If both are true, then check if the length of the email is greater than 10 characters and print “Valid Email”.

Write a program for online shopping:
First check if the cart total is ₹1000 or more.
If yes, then check if the user is a premium member.
If the user is premium, give 20% discount, otherwise give 10% discount.
Finally print the final amount after discount.

Check if a number is positive.
If yes, then check whether it is even.
If it is even, then further check if it is divisible by 4 and print “Positive Even and Divisible by 4”.

Create a job eligibility checker with multiple conditions:
First check if age is between 21 and 30.
If age is valid, then check if the candidate has a graduation degree.
If the degree is present, then check if the candidate has at least 2 years of experience.
Print “Eligible for Interview” only if all three conditions are true.

Write a nested program for exam eligibility:
First check if the student is present.
If present, then check if internal marks are ≥ 30.
If internal marks are valid, then check if external marks are ≥ 35.
Print “Eligible for Final Exam” only when all conditions are satisfied.

Answer:
1.
let num=40;
if(num>10){
    if(num%3==0){
        console.log("number is greater than 10 and divisible by 3")
    }
}

2.
let age = 19;
let voterId = true;
if(age>=18){
    if(voterId==true){
        console.log("Can Vote")
    }
}

3.
let marks = 40;
let score = 80;
if(marks>=40){
    if(score>=80){
        console.log("Passed with Distinction")
    }
}

4.
let pin = 1234;
let balance = 5000;
let amount = 1000;
if (pin == 1234) {
    if (amount <= balance) {
        balance = balance - amount;
        console.log("Withdrawal successful");
        console.log("Remaining balance:", balance);
    }
}

5.
let year = 2026;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("it is a leap year")
        }
    }
}

6.
let email = "diya123@gmail.com";

if (email.includes("@")) {
    if (email.endsWith(".com")) {
        if (email.length > 10) {
            console.log("Valid Email");
        }
    }
}

7.
let total = 1500;
let premium = true;
let discount;
if(total>=1000){
    if(premium==true){
       discount=total*20/100 
    }
    else{
        discount=total*10/100
    }
}
console.log("discount",discount)

8.
let num =40;
if(num>=0){
    if(num%2==0){
        if(num%4==0){
            console.log("Positive Even and Divisible by 4")
        }
    }
}

9.
let age = 25;
let degree = true;
let experience = 3;
if (age >= 21 && age <= 30) {
    if (degree == true) {
        if (experience >= 2) {
            console.log("Eligible for Interview");
        }
    }
}

10.
let present = true;
let internalMarks = 35;
let externalMarks = 40;
if (present == true) {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        }
    }
}
