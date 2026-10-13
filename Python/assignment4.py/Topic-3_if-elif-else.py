#------Question-19--------#
marks=int(input("Enter your marks :"))
if 90<=marks<=100:
    print("A")
elif 80<=marks<=89:
    print("B")
elif 70<=marks<=79:
    print("C")
elif 60<=marks<=69:
    print("D")
else:
    print("F") 


#--------Question-20--------#

temp=int(input("Enter Today's Temperature :"))
if temp>=40:
    print("Very Hot")
elif 30<=temp<=39:
    print("Hot")
elif 20<=temp<=29:
    print("Warm")
else:
    print("Cold")

#--------Question-21----------#

trf=input("Enter traffic signal color :")
if trf=="red":
    print("Stop")
elif trf=="yellow":
    print("Wait")
elif trf=="green":
    print("Go")
else:
    print("Invailid Signal")

#--------Question-22----------#

units=int(input("Take electricity units :"))
if 0<=units<=100:
    print("Low Usage")
elif 101<=units<=300:
    print("Medium Usage ")
elif 301<=units<=500:
    print("High Usage")
else:
    print("Very High Usage")

#--------Question-23---------#

age=int(input("Enter your age:"))
if 0<=age<5:
    print('Free Ticket')
elif 5<=age<=12:
    print("Child Ticket")
elif 13<=age<=59:
    print("Regular Ticket")
else:
    print("Senior Ticket")

#--------Question-24--------#

bmi=float(input("Enter BMI :"))
if 18.5>bmi:
    print("Underweight")
elif 18.5<=bmi<=24.9:
    print("Normal")
elif 25<=bmi<=29.9:
    print("Overweight")
else:
    print("Obese")

#-------Question-25----------#

month = int(input("Enter month number: "))

if month in [1, 3, 5, 7, 8, 10, 12]:
    print(("31 Days"))
elif month in [4, 6, 9, 11]:
    print("30 Days")
elif month == 2:
    print("28 or 29 Days")
else:
    print("Invalid Month")

#--------Question-26--------#

num1=float(input("Enter First number: "))
num2=float(input("Enter Second number: "))
operator=input("Enter Operator:")

if operator=="+":
    print(num1+num2)
elif operator=="-":
    print(num1-num2)
elif operator=="*":
    print(num1*num2)
elif operator=="/":
    print(num1/num2)
else:
    print("Invalid Operator")

#--------Question-27--------#

day = int(input("Enter day number: "))

if day==1:
    print("Monday")
elif day ==2:
    print("Tuesday")
elif day ==3:
    print("Wednesday")
elif day ==4:
    print("Thursday")
elif day ==5:
    print("Friday")
elif day ==6:
    print("Saturday")
elif day ==7:
    print("Sunday")
else:
    print("Invalid Day")

#--------Question-28--------#

score=int(input("Enter your Score:"))
if score>=90:
    print("Excellent")
elif 75<score<89:
    print("Very Good ")
elif 60<score<74:
    print("Good")
elif 40<score<59:
    print("Average")
else:
    print("Needs") 