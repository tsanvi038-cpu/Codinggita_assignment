#-----Question-29-----#

marks, attendance = map(int, input().split())

if marks >= 60 and attendance >= 75:
    print("Eligible")
else:
    print("Not Eligible")


#------Question-30-------#

marks, income = map(int, input().split())

if marks >= 85 or income < 300000:
    print("Scholarship Available")
else:
    print("No Scholarship")

#------Question-31-------#

day = input()

if day == "Saturday" or day == "Sunday":
    print("Weekend")
else:
    print("Weekday")

#------Question-32-------#

username, password = input().split()

if username == "student" and password == "python123":
    print("Access Granted")
else:
    print("Access Denied")


#------Question-33-------#

city = input()

if city == "Ahmedabad" or city == "Gandhinagar":
    print("Delivery Available")
else:
    print("Delivery Unavailable")



#------Question-34-------#

num = int(input())

if 10 <= num <= 50:
    print("Inside Range")
else:
    print("Outside Range")

#------Question-35-------#

amount, otp = input().split()

if int(amount) <= 50000 and otp == "1234":
    print("Transaction Approved")
else:
    print("Transaction Declined")