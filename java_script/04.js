//Assignment Operators :-----------------

//question no. --1
let name = "priya";
let marks = 92;
console.log(name)
console.log(marks)

//question no. --2
let score = o;

//question no. --3
let a = b = c = 50;

//question no. --4
let x;
x = 100;
console.log(x);
// output==> 100

//question no. --5
let p = 15;
let q = p;
q = 30;
console.log(p, q);
// output ==> 15 , 30
 
// Add and Assign += :---------------

//question no. --1
let score = 80;
score +=25;
console.log("score",score)

//question no. --2
let money = 1500;
money += 120;
console.log(money)

//question no. --3
let count = 10;
count += 5;
console.log(count);
//answer ==> 15

//question no. --4
let msg = "Good";
msg += " Morning";
console.log(msg);
// answer ==> Good Morning

//question no. --5
let n = 20;
n +=5;
console.log(n)
// output ==> 25

 //Subtract and Assign -= :-------------------

//question no. --1
let health = 100;
health -= 35;
console.log(health)

//question no. --2
let items = 300;
items-= 45;
console.log(items)

//question no. --3
let lives = 5;
lives -= 2;
console.log(lives);
// output ===> 3

//question no. --4
let num = "40";
num -= 15;
console.log(num);
//output===> 25

//question no. --5
// output ==> Nan

// 4. Multiply and Assign *= :---------------

//question no. --1
let item = 500;
item*=1.18;
console.log(item)

//question no. --2
let quantity = 8;
quantity *=3;
console.log(quantity)

//question no. --3
let amount = 200;
amount *= 1.1;
console.log(amount);
// output ==> 220

//question no. --4
let val = "7";
val *= 3;
console.log(val);
// output ==> 343

//question no. --5
//output ==> Nan

 //5. Divide and Assign /= :--------------

//question no. --1
let toatlChocolate = 180;
toatlChocolate /=6;
console.log(toatlChocolate)

//question no. --2
let distance = 300;
let time = 5;
distance /= time;
console.log(distance);

//question no. --3
let total = 400;
total /= 8;
console.log(total);
// output ==> 50

//question no. --4
let num = "100";
num /= 4;
console.log(num);
// output ==> 25

//question no. --5
// infinity

 //6. Modulus and Assign %= :---------------

//question no. --1
let num = 47;
num %=6;
console.log(num)

//question no. --2
let counter = 23;
counter %=12;
console.log(counter)

//question no. --3
let num = 29;
num %= 5;
console.log(num);
// output ==> 4

//question no. --4
let x = "17";
x %= 3;
console.log(x);
// output ==> 2

//question no. --5
// output==> infinity

// 7. Exponentiation and Assign **= :---------

//question no. --1
let side = 5;
side**=3;
console.log(side)

// qusetion no.----------------2
let num = 4;
num **=2;
console.log(num)

// qusetion no. --------------3
let base = 2;
base **= 5;
console.log(base);
// output ===> 32

// qusetion no. --------------4
let n = 4;
n **= 0.5;
console.log(n);
// output ===> 2

// qusetion no. --------------5
//output ===> 0.5
// ------------C] Comparison Operators-------------//
//---------- Loose Equality (==)----------//


// Answer :1-

console.log("25" == 25);     // true

// Answer :2-

console.log(0 == false);     // true

// Answer :3-

console.log(10 == "10");          // true
console.log(null == undefined);   // true

// Answer :4-

console.log("" == 0);        // true
console.log([] == false);    // true

// Answer :5-

console.log(NaN == NaN);     // false => NaN is never equal to anything, even itself.



//-------Loose Inequality (!=)-------//



// Answer-1

console.log("18" != 18);     // false

// Answer-2

console.log("1234" != 1234); // false

// Answer-3

console.log(5 != "5");       // false
console.log(0 != false);     // false

// Answer-4

console.log(null != undefined); // false
console.log("" != 0);           // false

// Answer-5

console.log(NaN != NaN);     // true =>NaN is not equal to itself.




//----------Strict Equality (===)----------//



// Answer-1

console.log("25" === 25);    // false

// Answer-2

console.log(0 === false);        // false
console.log(null === undefined); // false

// Answer-3

console.log(10 === "10");    // false
console.log(true === 1);     // false

// Answer-4

console.log("" === 0);       // false
console.log([] === false);   // false


// Answer-5

(===) value aur data type dono check karta hai, isliye real-world projects me zyada use hota hai.


//-------Strict Inequality (!==)------------//


// Answer-1

console.log("18" !== 18);    // true

// Answer-2

console.log(0 !== false);        // true
console.log(null !== undefined); // true

// Answer-3

console.log(5 !== "5");      // true
console.log(true !== 1);     // true

// Answer-4

console.log("" !== 0);       // true
console.log(NaN !== NaN);    // true

// Answer-5

let input = "5";

if (input !== "0") {
    console.log("Input is not equal to '0'");
}
//Part C] Relational Operator
//------topic= Greater Than-------

 //question no. -1. 
 let studentMarks = 78;
 let passingMarks= 40;
 let result = studentMarks > passingMarks;
 console.log("is student pass ?",result)

// question no. -2.
let todayTemperature=35;
let yesterdayTemperature= 28;
let result = todayTemperature> yesterdayTemperature;
console.log("today is hotter ?", result)

// question no. -3.
// console.log(15 > 10);-----true
// console.log(10 > 15);-----false
// console.log(10 > 10);-----false

// question no. -4.
// console.log("20" > 15);-----------true
// console.log("5" > "10");----------true
// console.log("abc" > 10);----------Nan

// question no. -5.
//console.log(null>0)----------false(because value of null is o)
//console.log(undefined>0)-------Nan (because  value of undefined is nan)

// question no. -6.
let items=120;
let itemsToBuy =85;
let result = items > itemsToBuy;
console.log( "if stock is sufficient?", result)

// question no. -7.
// console.log(true > false);--------true
// console.log("10" > "2");----------false
// console.log(NaN > 5);-------------false

//------topic= less Than-------
// question no. -1.
let maximumWeight = 50;
let currentWeight = 42;
let result = maximumWeight < currentWeight;
console.log( "more items can still be added?", result)

// question no. -2.
let personAge = 16;
let minimumAge = 18;
let result = personAge<minimumAge;
console.log("the person is underage?" , result)

// question no. -3.
// console.log(8 < 12);------> true
// console.log(20 < 10);------> false
// console.log(7 < 7);--------> false

// question no. -4.
// console.log("8" < 10);-------->true
// console.log("20" < "3");------->true
// console.log("hello" < 5);------>NaN

// question no. -5.
//console.log(null<0)----------false(because value of null is o)
//console.log(undefined<0)-------Nan (because  value of undefined is nan)

// question no. -6.
let capacity = 500;
let CurrentwaterLevel = 375;
let result =  capacity < currentWaterLevel;
console.log("if it is not full?",result)  

// question no. -7.
// console.log(false < true);-----> true
// console.log("5" < "15");-------->false
// console.log(NaN < 10);--------->


//-------topic= Greater Than or Equal To (>=)-------

// question no.-1.
let minimumMarks = 75;
let studentMarks = 75;
let result = studentMarks >= minimumMarks;
console.log("student gets distinction ?", result);

// question no.-2.
let ticketPrice = 300;
let money = 300;
let result2 = money >= ticketPrice;
console.log("can buy ticket ?", result2);

// question no.-3.
// console.log(25 >= 25);------true
// console.log(30 >= 25);------true
// console.log(20 >= 25);------false

// question no.-4.
// console.log("25" >= 25);------true
// console.log("10" >= "2");------false
// console.log(null >= 0);------true

// question no.-5.
// console.log(undefined >= 0);------false (because undefined converts to NaN)

// question no.-6.
let people = 8;
let liftCapacity = 8;
let result3 = people >= liftCapacity;
console.log("lift is full or overloaded ?", result3);

// question no.-7.
// console.log(true >= 1);------true
// console.log("" >= 0);------true
// console.log(NaN >= NaN);------false


//-------topic= Less Than or Equal To (<=)-------

// question no.-1.
let speedLimit = 60;
let vehicleSpeed = 60;
let result4 = vehicleSpeed <= speedLimit;
console.log("vehicle is within speed limit ?", result4);

// question no.-2.
let passingMarks = 40;
let marks = 39;
let result5 = marks < passingMarks;
console.log("student has failed ?", result5);

// question no.-3.
// console.log(15 <= 20);------true
// console.log(20 <= 15);------false
// console.log(15 <= 15);------true

// question no.-4.
// console.log("15" <= 20);------true
// console.log("30" <= "5");------true
// console.log(null <= 0);------true

// question no.-5.
// console.log(undefined <= 0);------false (because undefined converts to NaN)

// question no.-6.
let books = 10;
let bagCapacity = 10;
let result6 = books < bagCapacity;
console.log("can add more books ?", result6);

// question no.-7.
// console.log(false <= 0);------true
// console.log("" <= 0);------true
// console.log(NaN <= 5);------false


//-------topic= Mixed Practice (>, <, >=, <=)-------

// question no.-1.
// console.log(18 >= 18);------true
// console.log(32 < 35);------true
// console.log(90 > 85);------true

// question no.-2.
// console.log(10 > 5 && 5 < 10);------true
// console.log("10" >= 10);------true
// console.log(null <= undefined);------false
// console.log("5" < "10" && 5 > 2);------false

// question no.-3.
let productPrice = 499;
let customerMoney = 500;
let canBuy = customerMoney >= productPrice;
let changeLeft = customerMoney > productPrice;

console.log("customer can buy product ?", canBuy);
console.log("change will be left ?", changeLeft);

// question no.-4.
// console.log("10" > "2");------false
// console.log(10 > 2);------true
// (Strings are compared lexicographically, while numbers are compared numerically.)












