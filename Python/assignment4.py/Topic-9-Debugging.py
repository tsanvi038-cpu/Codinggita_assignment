#-------Question-69-------#

age = int(input("Enter age: "))

if age >= 18:
    print("Eligible")
else:
    print("Not Eligible")

#-------Question-70-------#

marks = int(input("Enter marks: "))

if marks >= 40:
    if marks >= 90:
        print("A")
    elif marks >= 75:
        print("B")
else:
    print("Fail")
