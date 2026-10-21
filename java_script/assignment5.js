Part A] For Loop
1.
for(let i = 1 ; i<=15 ; i++){
    console.log(i)
}

2.
for(let i = 1 ; i<=40 ; i++){
    if(i%2==0){
        console.log(i)
    }
}
3.
for(let i = 1 ; i<=40 ; i++){
    if(i%2!=0){
        console.log(i)
    }
}
4.
total=0
for(i = 10 ; i<=100 ; i=i+10){
    total+=i
}console.log("Total savings after 10 days:",total)
5.
num=12;
for(i =1;i<=10;i++){
    console.log(num*i)
}
6.
glass=3;
for(i=1;i<=7;i++){
    console.log(i,":",glass*i)
}
7.
cost=15
for(i=1;i<=10;i++){
    console.log(i,"chocolate",cost*i)
}
8.
sum=0;
for(i=1;i<=30;i++){
    if(i%2==0){
        sum+=i
    }
}console.log("Sum of even numbers:",sum)
9.
pushUp=5;
for(i=1;i<=7;i++){
    console.log("Day",i,":",pushUp*i,"Push-Up")
}
10.
cost=150;
for(i=1;i<=8;i++){
    console.log(i,"Person : ₹"+cost*i)
}

Part B] For Loop (Additional advanced questions)
Given an array of temperatures [28, 32, 25, 40, 18, 35], use a for loop to count how many days were hotter than 30°C.
Write a for loop that calculates the sum of all digits of a given number (example: 4729 → 4+7+2+9 = 22).
Create a for loop that prints only the numbers between 1 and 100 that are divisible by both 3 and 5, but not by 7.
Given the string "JavaScript", use a for loop to create a new string that contains only the consonants (remove vowels).
Write a for loop that finds the largest number in an array of positive integers without using any sorting method.
Use a for loop to check whether a given number is a perfect number (a number equal to the sum of its proper divisors). Example: 28.
Print the following series using a single for loop:
1 2 4 8 16 32 64 128
Write a for loop that prints the first 20 Fibonacci numbers (starting with 0 and 1).
Given an array of student scores [45, 78, 90, 32, 56, 88], use a for loop to calculate the average and also count how many students scored above the average.
Write a for loop that converts a decimal number to its binary representation (without using built-in methods like toString(2)).

Answer:
#1
let temp = [28, 32, 25, 40, 18, 35];
let count = 0;

for (let i = 0; i < temp.length; i++) {
    if (temp[i] > 30) {
        count++;
    }
}
console.log(count);

#2
let n = 4729;
let sum = 0;

for (; n > 0; n = Math.floor(n / 10)) {
    sum += n % 10;
}
console.log(sum);

#3
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
        console.log(i);
    }
}

#4
let str = "JavaScript";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (!"aeiouAEIOU".includes(str[i])) {
        result += str[i];
    }
}
console.log(result);

#5
let arr = [12, 45, 23, 67, 34];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);

#6
let n = 28;
let sum = 0;

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        sum += i;
    }
}

if (sum === n) {
    console.log("Perfect Number");
} else {
    console.log("Not Perfect");
}

#7
let n = 1;

for (let i = 1; i <= 8; i++) {
    console.log(n);
    n *= 2;
}

#8
let a = 0, b = 1;

for (let i = 1; i <= 20; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}

#9
let scores = [45, 78, 90, 32, 56, 88];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

let avg = sum / scores.length;
let count = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > avg) {
        count++;
    }
}

console.log("Average:", avg);
console.log("Above average:", count);

#10
let n = 13;
let binary = "";

for (; n > 0; n = Math.floor(n / 2)) {
    binary = (n % 2) + binary;
}

console.log(binary);

Part C-a] break inside a for Loop
Write a for loop that searches for the first occurrence of the number 7 in an array. As soon as it finds 7, print its index and stop the loop using break.
Simulate a simple password checker: keep asking the user for a password (using a for loop that runs maximum 5 times). If the correct password is entered, print “Access granted” and break. If all 5 attempts fail, print “Account locked”.
Write a for loop that adds numbers from 1 onwards until the sum exceeds 100. Print the last number that was added before the sum crossed 100 and stop using break.
Given an array of names, use a for loop to find the first name that starts with the letter “S”. Print that name and immediately stop the loop with break.
Create a for loop that prints numbers from 1 to 50. Stop completely (break) as soon as you encounter a number that is both a perfect square and greater than 20.
Answer:
#1
let arr = [2, 5, 7, 9, 7];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        console.log(i);
        break;
    }
}

#2
let correct = "abc123";
let entered;

for (let i = 1; i <= 5; i++) {
    entered = prompt("Enter password");

    if (entered === correct) {
        console.log("Access granted");
        break;
    }

    if (i === 5) {
        console.log("Account locked");
    }
}

#3
let sum = 0;

for (let i = 1; ; i++) {
    sum += i;

    if (sum > 100) {
        console.log(i);
        break;
    }
}

#4
let names = ["Aman", "Riya", "Simran", "Sahil"];

for (let i = 0; i < names.length; i++) {
    if (names[i][0] === "S") {
        console.log(names[i]);
        break;
    }
}

#5
for (let i = 1; i <= 50; i++) {
    if (i > 20 && Number.isInteger(Math.sqrt(i))) {
        console.log(i);
        break;
    }
}

Part C-b] continue inside a for Loop
Print all numbers from 1 to 30, but skip every number that is divisible by 4 using continue.
Given an array of mixed positive and negative numbers, use a for loop with continue to calculate the sum of only the positive numbers.
Write a for loop that prints every character of the string "Hello World", but skips all spaces using continue.
Print the multiplication table of 6 from 1 to 12, but skip the rows where the product is divisible by 5 (use continue).
Given an array of ages [12, 18, 25, 15, 30, 17, 22], use a for loop with continue to print only the ages of people who are eligible to vote (age ≥ 18).
Answer:

#1
for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

#2
let arr = [10, -5, 20, -3, 8];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        continue;
    }
    sum += arr[i];
}
console.log(sum);

#3
let str = "Hello World";

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        continue;
    }
    console.log(str[i]);
}

#4
for (let i = 1; i <= 12; i++) {
    let product = 6 * i;

    if (product % 5 === 0) {
        continue;
    }
    console.log("6 x", i, "=", product);
}

#5
let ages = [12, 18, 25, 15, 30, 17, 22];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        continue;
    }
    console.log(ages[i]);
}
