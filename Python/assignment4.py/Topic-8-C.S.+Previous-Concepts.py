#------Question-58-------#

student_id = input("Enter student ID: ")

degree, batch, branch, roll_number = student_id.split("-")

print("Degree:", degree)
print("Batch:", batch)
print("Branch:", branch)
print("Roll Number:", roll_number)

if branch == "CSE":
    print("CSE Student")
else:
    print("Non-CSE Student")


#------Question-59-------#

email = input("Enter email address: ")

username, domain = email.split("@")

if domain == "gmail.com":
    print("Gmail User")
else:
    print("Other Email Provider")

#------Question-60------#

full_name = input("Enter full name: ")

first_name, middle_name, last_name = full_name.split()

username = first_name + "." + last_name

print("Username:", username)

if "." in username:
    print("Valid Username Format")
else:
    print("Invalid Username Format")

#-------Question-61-------#

number = int(input("Enter a positive integer: "))

if number < 10:
    print("One Digit")
elif number < 100:
    print("Two Digits")
elif number < 1000:
    print("Three Digits")
else:
    print("Four or More Digits")

#-------Question-62-------#

number = int(input("Enter a positive integer: "))

if number < 10:
    print("One Digit")
elif number < 100:
    print("Two Digits")
elif number < 1000:
    print("Three Digits")
else:
    print("Four or More Digits")

#-------Question-63-------#

units = int(input("Enter units consumed: "))

if units <= 100:
    rate = 5
elif units <= 300:
    rate = 7
else:
    rate = 10

bill = units * rate

print("Units:", units)
print("Rate: ₹", rate, sep="")
print("Bill: ₹", bill, sep="")

#------Question-64------#

balance = 10000

print("1. Check Balance")
print("2. Deposit")
print("3. Withdraw")
print("4. Exit")

choice = int(input("Enter your choice: "))

match choice:
    case 1:
        print("Balance:", balance)

    case 2:
        amount = int(input("Enter deposit amount: "))
        balance += amount
        print("Deposit Successful, Balance:", balance)

    case 3:
        amount = int(input("Enter withdrawal amount: "))
        if amount <= balance:
            balance -= amount
            print("Withdrawal Successful, Balance:", balance)
        else:
            print("Insufficient Balance")

    case 4:
        print("Exit")

    case _:
        print("Invalid Choice")

#------Question-65-------#

print("1. Pizza - ₹250")
print("2. Burger - ₹150")
print("3. Pasta - ₹200")
print("4. Sandwich - ₹120")

choice = int(input("Enter item number: "))
quantity = int(input("Enter quantity: "))

match choice:
    case 1:
        price = 250
    case 2:
        price = 150
    case 3:
        price = 200
    case 4:
        price = 120
    case _:
        print("Invalid Choice")
        exit()

total = price * quantity

if total >= 500:
    discount = total * 0.10
else:
    discount = 0

final_amount = total - discount

print("Total:", total)
print("Discount:", f"{discount:.2f}")
print("Final:", f"{final_amount:.2f}")

#-------Question-66-------#

mark1 = int(input("Enter Subject 1 marks: "))
mark2 = int(input("Enter Subject 2 marks: "))
mark3 = int(input("Enter Subject 3 marks: "))
attendance = int(input("Enter attendance percentage: "))

total = mark1 + mark2 + mark3
average = total / 3

print("Total:", total)
print("Average:", average)

if attendance >= 75:
    if average >= 90:
        print("Outstanding")
    elif average >= 75:
        print("Very Good")
    elif average >= 60:
        print("Good")
    elif average >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible")

#-----Question-67-------#

distance = float(input("Enter distance in km: "))
ride_type = input("Enter ride type (normal/premium): ")

match ride_type:
    case "normal":
        rate = 15
    case "premium":
        rate = 25
    case _:
        print("Invalid Ride Type")
        exit()

fare = distance * rate

if distance > 20:
    fare += fare * 0.10  # 10% surcharge

print("Fare:", f"{fare:.2f}")

#------Question-68-------#

score = int(input("Enter entrance score: "))
percentage = int(input("Enter 12th percentage: "))
category = input("Enter category (general/obc/sc): ")

match category:
    case "general":
        if score >= 80 and percentage >= 75:
            print("Admission Eligible")
        else:
            print("Admission Not Eligible")

    case "obc":
        if score >= 70 and percentage >= 70:
            print("Admission Eligible")
        else:
            print("Admission Not Eligible")

    case "sc":
        if score >= 60 and percentage >= 60:
            print("Admission Eligible")
        else:
            print("Admission Not Eligible")

    case _:
        print("Admission Not Eligible")

