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

Part D] Reverse For Loop
Write a reverse for loop that prints all numbers from 50 down to 1 that are divisible by 3 but not divisible by 9.

Write a reverse for loop that calculates the product of all odd digits of a given number (example: 4729 → 7 × 9 = 63).

Given the string "Programming", use a reverse for loop to create a new string that contains only the consonants in reverse order.

Write a reverse for loop that prints the first 15 Fibonacci numbers in reverse order (starting from the 15th number down to 0).

Use a reverse for loop to check whether a given number is a palindrome by comparing digits from both ends (without converting the number to a string).

Given an array [12, 45, 7, 23, 56, 89, 34], use a reverse for loop to find the largest number that is less than 50 (do not use any built-in methods).

Given an array of temperatures [32, 28, 41, 19, 35, 27, 38], use a reverse for loop to count how many days were colder than 30°C, starting from the last day.

Write a reverse for loop that converts a decimal number to its binary representation but prints the binary digits in reverse order (example: 13 → 1011 becomes 1101).

(Reverse For Loop + break)
Given an array [90, 85, 70, 95, 60, 88, 75], use a reverse for loop to find the first score (starting from the end) that is greater than 80. Print that score and its index, then stop the loop using break.

(Reverse For Loop + continue)
Write a reverse for loop that prints numbers from 40 down to 1, but skips every number that is a perfect square using continue.

Answer:
#1
for (let i = 50; i >= 1; i--) {
    if (i % 3 === 0 && i % 9 !== 0) {
        console.log(i);
    }
}
#2
let n = 4729;
let product = 1;

for (; n > 0; n = Math.floor(n / 10)) {
    let digit = n % 10;
    if (digit % 2 !== 0) {
        product *= digit;
    }
}

console.log(product);
#3
let str = "Programming";
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
    if (!"aeiouAEIOU".includes(str[i])) {
        result += str[i];
    }
}

console.log(result);
#4
let a = 0, b = 1;
let arr = [];

for (let i = 0; i < 15; i++) {
    arr[i] = a;
    let c = a + b;
    a = b;
    b = c;
}

for (let i = 14; i >= 0; i--) {
    console.log(arr[i]);
}
#5
let n = 121;
let temp = n;
let rev = 0;

for (; temp > 0; temp = Math.floor(temp / 10)) {
    rev = rev * 10 + temp % 10;
}

console.log(n === rev ? "Palindrome" : "Not Palindrome");
#6
let arr = [12, 45, 7, 23, 56, 89, 34];
let largest = -Infinity;

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 50 && arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);
#7
let arr = [32, 28, 41, 19, 35, 27, 38];
let count = 0;

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 30) {
        count++;
    }
}

console.log(count);
#8
let n = 13;

for (; n > 0; n = Math.floor(n / 2)) {
    console.log(n % 2);
}
#9
let arr = [90, 85, 70, 95, 60, 88, 75];

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 80) {
        console.log(arr[i], i);
        break;
    }
}
#10
for (let i = 40; i >= 1; i--) {
    let square = false;

    for (let j = 1; j * j <= i; j++) {
        if (j * j === i) {
            square = true;
            break;
        }
    }

    if (square) {
        continue;
    }

    console.log(i);
}

Part E] Nested For Loop Questions
Print the following right-triangle number pattern using nested for loops (without hard-coding any row):
1
2 3
4 5 6
7 8 9 10
Print the following right-triangle number pattern using nested for loops (without hard-coding any row):
1
2 2
3 3 3
4 4 4 4
Print the following right-triangle number pattern using nested for loops (without hard-coding any row):
1
2 3
4 5 6
7 8 9 10
Print the following pattern using nested for loops (without hard-coding any row):
* * * *
*     *
*     *
* * * *
Print the following right-triangle number pattern using nested for loops (without hard-coding any row):
#
$ $
# # #
$ $ $ $
# # # # #
$ $ $ $ $ $
Print the following right-triangle alphabet pattern using nested for loops (without hard-coding any row):
A
A B
A B C
A B C D
A B C D E
Print this hollow right-triangle star pattern using nested loops:
*
* *
*   *
*     *
* * * * *
Print the following reverse right-angle star pattern using nested for loops:
*****
****
***
**
*
Print the following reverse right-angle pattern where each row contains the row number repeated, using nested loops:
5 5 5 5 5
4 4 4 4
3 3 3
2 2
1
Print this reverse right-angle number pattern using nested for loops:
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
Print the following reverse right-angle pattern of consecutive numbers using nested loops:
15 14 13 12 11
10  9  8  7
 6  5  4
 3  2
 1
Print this reverse right-angle hollow star pattern (only the borders should have stars) using nested for loops:
* * * * *
*     *
*   *
* *
*
Using nested for loops, print a 5×5 square of stars (*) but skip printing a star whenever the row number equals the column number (i.e., leave the main diagonal empty).

Write nested for loops that print the multiplication table of numbers from 1 to 5, but only show the products that are even. (Each table should start on a new line.)

Write a program to print a symmetric number palindrome pyramid on each row.

    1
  1 2 1
1 2 3 2 1

Answer:
    1.
let num=1
for(let i = 1;i<=4;i++){
  let bag = "";
  for(let j=1;j<=i;j++){
    bag+=num+" "
    num++
  }
  console.log(bag)
}

2.
for(let i=1; i <= 4; i++){
  let bag = "";
  for(let j=1; j <= i; j++){
  bag +=i+" "
  }
 console.log(bag)
}

3.
num=1;
for(let i = 1;i<=4;i++){
  row=""
  for(let j=1;j<=i;j++){
    row+=num+" "
    num++
  }
  console.log(row)
}

4.
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= 4; j++) {
        if (i == 1 || i == 4 || j == 1 || j == 4) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

5.
for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        if (i % 2 == 1) {
            row += "# ";
        } else {
            row += "$ ";
        }
    }
    console.log(row);
}

6.
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        if (j == 1) row += "A ";
        else if (j == 2) row += "B ";
        else if (j == 3) row += "C ";
        else if (j == 4) row += "D ";
        else if (j == 5) row += "E ";
    }
    console.log(row);
}
    
7.
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i || i == 5) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

8.
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

9.
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }
    console.log(row);
}

10.
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

11.
let num = 15;
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num--;
    }
    console.log(row);
}

12.
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        if (i == 5 || j == 1 || j == i) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

13.
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        if (i != j) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

14.
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        let product = i * j;

        if (product % 2 == 0) {
            row += product + " ";
        }
    }
    console.log(i + " table: " + row);
}

15.
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let s = 1; s <= 3 - i; s++) {
        row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    for (let j = i - 1; j >= 1; j--) {
        row += j + " ";
    }
    console.log(row);
}

Part E] While Loop
Q1. Print Numbers
Write a while loop to print numbers from 1 to 10.

Q2. Sum of Natural Numbers
Write a while loop to calculate the sum of the first 10 natural numbers.

Q3. Multiplication Table
Write a while loop to print the multiplication table of a given number from 1 to 10.

Example: Input: 5

Output: 5 x 1 = 5 5 x 2 = 10 ... 5 x 10 = 50

Q4. Count the Digits
Write a while loop to count the total number of digits in a given positive integer.

Example: Input: 58372 Output: 5

Q5. Reverse a Number
Write a while loop to reverse the digits of a given positive integer.

Example: Input: 12345 Output: 54321

Q6. Sum of Digits
Write a while loop to calculate the sum of all digits of a given number.

Example: Input: 4729 Output: 22

Q7. Print Numbers with Conditions
Write a while loop to print all numbers between 1 and 100 that are divisible by both 3 and 5 but not by 7.

Q8. Calculate Factorial
Write a while loop to calculate the factorial of a given non-negative integer.

Example: Input: 5 Output: 120

Q9. Check a Palindrome Number
Write a while loop to check whether a given number is a palindrome without converting it into a string.

Example: Input: 121 Output: Palindrome number

Q10. Convert Decimal to Binary
Write a while loop to convert a positive decimal integer into its binary representation without using built-in methods such as toString(2).

Example: Input: 13 Output: 1101

Answer:
    1.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

2.
let i = 1;
let sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);

3.
let num = 5;
let i = 1;
while (i <= 10) {
    console.log(num + " x " + i + " = " + (num * i));
    i++;
}

4.
let num = 58372;
let count = 0;
while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}
console.log(count);

5.
let num = 12345;
let rev = 0;
while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}
console.log(rev);

6.
let num = 4729;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
}
console.log(sum);

7.
let i = 1;
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 != 0) {
        console.log(i);
    }
    i++;
}

8.
let num = 5;
let i = 1;
let fact = 1;
while (i <= num) {
    fact *= i;
    i++;
}
console.log(fact);

9.
let num = 121;
let original = num;
let rev = 0;
while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}
if (original == rev) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}

10.
let num = 13;
let binary = "";
while (num > 0) {
    let rem = num % 2;
    binary = rem + binary;
    num = Math.floor(num / 2);
}
console.log(binary);

Part F]: Do-While Loop
Q1. Print Numbers in Reverse
Write a do-while loop to print numbers from 10 down to 1.

Q2. Print Even Numbers
Write a do-while loop to print all even numbers between 1 and 20.

Q3. Sum of Natural Numbers
Write a do-while loop to calculate the sum of the first n natural numbers.

Example: Input: 5 Output: 15

Q4. Product of Digits
Write a do-while loop to calculate the product of all digits of a given positive integer.

Example: Input: 234 Output: 24

Q5. Find the First Digit
Write a do-while loop to find the leftmost digit of a given positive integer.

Example: Input: 58372 Output: 5

Q6. Calculate a Power
Write a do-while loop to calculate the power of a number without using Math.pow() or the exponentiation operator **.

Example: Input: Base = 3, Exponent = 4 Output: 81

Q7. Print Multiples with Conditions
Write a do-while loop to print all numbers between 1 and 100 that are divisible by 4 but not by 8.

Q8. Check a Palindrome Number
Write a do-while loop to check whether a given positive integer is a palindrome without converting it into a string.

Example: Input: 1221 Output: Palindrome number

Q9. Find the Greatest Common Divisor (GCD)
Write a do-while loop to find the greatest common divisor of two positive integers.

Example: Input: 48, 18 Output: 6

Q10. Convert Decimal to Binary
Write a do-while loop to convert a non-negative decimal integer into binary without using built-in conversion methods.

Example: Input: 13 Output: 1101

Challenge: Handle the input 0 correctly as well.

Answer:
1.
let i = 10;
do {
    console.log(i);
    i--;
} while (i >= 1);

2.
let i = 2;
do {
    console.log(i);
    i += 2;
} while (i <= 20);

3.
let n = 5;
let i = 1;
let sum = 0;
do {
    sum += i;
    i++;
} while (i <= n);
console.log(sum);

4.
let num = 234;
let product = 1;
do {
    let digit = num % 10;
    product *= digit;
    num = Math.floor(num / 10);
} while (num > 0);
console.log(product);

5.
let num = 58372;
do {
    if (num < 10) {
        break;
    }
    num = Math.floor(num / 10);
} while (num > 0);
console.log(num);

6.
let base = 3;
let exponent = 4;
let i = 1;
let result = 1;
do {
    if (i > exponent) {
        break;
    }
    result *= base;
    i++;
} while (i <= exponent);
console.log(result);

7.
let i = 1;
do {
    if (i % 4 == 0 && i % 8 != 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);

8.
let num = 1221;
let original = num;
let rev = 0;
do {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
} while (num > 0);

if (original == rev) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}

9.
let a = 48;
let b = 18;
let rem;
do {
    rem = a % b;
    a = b;
    b = rem;
} while (b != 0);
console.log(a);

10.
let num = 13;
let binary = "";
if (num == 0) {
    binary = "0";
} else {
    do {
        let rem = num % 2;
        binary = rem + binary;
        num = Math.floor(num / 2);
    } while (num > 0);
}
console.log(binary);
