#-----Question-9------#

value=int(input("Enter enter your input "))
if value%2==0:
    print("even")
else:
    print("odd")

#------Question-10-------#

marks=int(input("Enter your marks :"))
if marks>=40:
    print("pass")
else:
    print("fail")

#-------Question-11--------#

age=int(input("Enter your age :"))
if age>=18:
    print("Adult")
else:
    print("Minor")

#-------Question-12---------#

value=int(input("Enter your number :"))
if value>0:
    print("Positive ")
else:
    print("Non-Positive")

#-------Question-13---------#

value=int(input("enter value:"))
if value%3==0:
    print("Divisible by 3")
else:
    print("Not Divisible by 3")

#-------Question-14----------#

password=input("Enter your Password :")
if password=="python123":
    print("Login Successful")
else:
    print("Invalid Password")

#-------Question-15--------#

name=input("Enter Your Username:")
if name=="admin":
    print("WElcome Admin")
else:
    print("Invailid Username")

#-------Question-16--------#

num1=int(input("Enter your First number here:"))
num2=int(input("Enter your  Second number here:"))
if num1>num2:
    print(num1)
elif num2>num1:
    print(num2)
else:
    print("Both numbers are equal")

#-------Question-17--------#

temp=int(input("Enter today's temperature :"))
if temp>30:
    print("Hot")
else:
    print("Comfortable")

#-------Question-18--------#

amount=int(input("Enter your Shopping Amount :"))
if amount>=5000:
    print("Discount Availble")
else:
    print("No Discount")
