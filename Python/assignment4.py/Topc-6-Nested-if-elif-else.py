#-------Question-44--------#

a = int(input("Enter A: "))
b = int(input("Enter B: "))
c = int(input("Enter C: "))

if a > b:
    if a > c:
        print("A is Greatest")
    elif a == c:
        print("A and C are Equal and Greatest")
    else:
        print("C is Greatest")
elif b > a:
    if b > c:
        print("B is Greatest")
    elif b == c:
        print("B and C are Equal and Greatest")
    else:
        print("C is Greatest")
else:  # a == b
    if a > c:
        print("A and B are Equal and Greatest")
    elif a == c:
        print("All are Equal")
    else:
        print("C is Greatest")


#-------Question-45-------#

marks = int(input("Enter marks: "))
attendance = int(input("Enter attendance percentage: "))

if attendance >= 75:
    if marks >= 90:
        print("Grade A")
    elif marks >= 75:
        print("Grade B")
    elif marks >= 60:
        print("Grade C")
    elif marks >= 40:
        print("Grade D")
    else:
        print("Grade F")
else:
    print("Not Eligible")

#------Question-46------#

salary = int(input("Enter salary: "))
rating = int(input("Enter performance rating: "))

if salary >= 30000:
    if rating == 5:
        print("Bonus: 20%")
    elif rating == 4:
        print("Bonus: 15%")
    elif rating == 3:
        print("Bonus: 10%")
    else:
        print("Bonus: 5%")
else:
    print("Not Eligible for Bonus")

#-----Question-47------#

age = int(input("Enter age: "))
distance = int(input("Enter distance (km): "))

if age < 5:
    print("Free")
elif age >= 60:
    print("Senior")
else:
    if distance <= 10:
        print("Regular - Short Distance")
    else:
        print("Regular - Long Distance")

#-------Question-48-------#

stock = int(input("Enter product stock: "))
payment_status = input("Enter payment status: ")

if stock > 0:
    if payment_status == "paid":
        print("Order Confirmed")
    elif payment_status == "pending":
        print("Payment Pending")
    else:
        print("Invalid Payment Status")
else:
    print("Out of Stock")


#------Question-49-------#

age = int(input("Enter age: "))
ticket_type = input("Enter ticket type: ")

if age < 5:
    print("Free Travel")
elif age >= 60:
    print("Senior Passenger")
else:
    if ticket_type == "AC":
        print("AC Ticket")
    elif ticket_type == "Sleeper":
        print("Sleeper Ticket")
    else:
        print("Invalid Ticket Type")


