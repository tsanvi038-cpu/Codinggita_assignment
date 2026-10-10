#--------Question-36-------#

username = input()
password = input()

if username == "admin":
    if password == "admin123":
        print("Login Successful")
    else:
        print("Wrong Password")
else:
    print("Invalid Username")


#------Question-37-------#

age = int(input("Enter age: "))
test_status = input("Enter test status (pass/fail): ")

if age >= 18:
    if test_status == "pass":
        print("License Approved")
    else:
        print("Test Not Passed")
else:
    print("Age Not Eligible")


#------QUestion-38--------#

balance = int(input("Enter account balance: "))
withdrawal = int(input("Enter withdrawal amount: "))

if withdrawal <= balance:
    if withdrawal % 100 == 0:
        print("Withdrawal Successful")
    else:
        print("Enter Amount in Multiples of 100")
else:
    print("Insufficient Balance")

#------Question-39--------#

attendance = int(input("Enter attendance percentage: "))
marks = int(input("Enter marks: "))

if attendance >= 75:
    if marks >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible Due to Attendance")

#-------Queston-40---------#

account_type = input("Enter account type: ")
balance = int(input("Enter balance: "))

if account_type == "savings":
    if balance >= 1000:
        print("Minimum Balance Maintained")
    else:
        print("Minimum Balance Not Maintained")
else:
    print("Unsupported Account")

#-------Question-41-------#

order_amount = int(input("Enter order amount: "))
payment_method = input("Enter payment method: ")

if order_amount >= 500:
    if payment_method == "card":
        print("Card Payment Accepted")
    elif payment_method == "upi":
        print("UPI Payment Accepted")
    else:
        print("Unsupported Payment Method")
else:
    print("Minimum Order Amount Not Reached")

#------Question-42-------#

year = int(input("Enter year of study: "))
attendance = int(input("Enter attendance percentage: "))

if year in [2, 3, 4]:
    if attendance >= 75:
        print("Room Eligible")
    else:
        print("Attendance Too Low")
else:
    print("Not Eligible by Year")

#-------Question-43--------#

plan = input("Enter current plan: ")
usage = int(input("Enter monthly usage (GB): "))

if plan == "basic":
    if usage > 100:
        print("Recommend Upgrade")
    else:
        print("Basic Plan Is Sufficient")
else:
    print("Already on Higher Plan")



