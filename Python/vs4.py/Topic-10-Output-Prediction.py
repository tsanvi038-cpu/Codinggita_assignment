#------Question-71-------#

marks = 85

if marks >= 75:
    print("Very Good")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")

#------Question-72------#


marks = 85

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")

#Foe Example-

marks = 85

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")

#Foe Example-

if marks >= 40:
    print("Pass")
elif marks >= 75:
    print("B")
elif marks >= 90:
    print("A")


#------Question-73------#

if marks >= 40:
    print("Pass")
elif marks >= 75:
    print("B")
elif marks >= 90:
    print("A")

# Check the highest range first:

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")

#------Question-74--------#

choice = 5

match choice:
    case 1:
        print("Add")
    case 2:
        print("View")
    case 3:
        print("Delete")
    case _:
        print("Invalid Choice")

#------Question-75--------#

marks = 82
attendance = 80

if attendance >= 75:
    if marks >= 90:
        print("Grade A")
    elif marks >= 75:
        print("Grade B")
    elif marks >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible")