import time

def set_new_user():
    user_id = len(user_list) + 1

    user_name = str(input("Enter your name: "))
    user_age = int(input("Enter your age: "))
    user_contact = int(input("Inform your phone number (format: xxxxxxxxxxx): "))

    print("\n----------------------")
    print("Data confirmation:")
    print(f"""
    Name: {user_name};
    Age: {user_age};
    Phone number: {user_contact};
    """)

    confirmation = str(input("All data are right? \n[Y] - Yes | [N] - Nop: "))

    if confirmation in "Yy":
        user_list.append(dict(id= user_id, name= user_name, age= user_age, contact= user_contact))

        print(user_list)

def edit_an_user():
    while True:
        user_to_edit_id = int(input("Inform the ID of the user you want to edit: "))

        print(f"Current user data: {user_list[user_to_edit_id - 1]}")
        
        item_to_change = str(input("Choose an item to change: \n[N] - Name | [A] - Age | [C] - Contact: \nOption: "))

        if item_to_change in "Nn":
            new_user_name = str(input("New name: "))

            user_list[user_to_edit_id - 1]["name"] = new_user_name

        elif item_to_change in "Aa":
            new_user_age = int(input("New age: "))

            user_list[user_to_edit_id - 1]["age"] = new_user_age

        elif item_to_change in "Cc":
            new_user_contact = int(input("New contact: "))

            user_list[user_to_edit_id - 1]["contact"] = new_user_contact

        print(f"Updated user data: {user_list[user_to_edit_id - 1]}")

        continue_or_close = str(input("All the informations it's correct? \n[Y] - Yes. Close the user editor. | [N] - No"))

def show_users_list():
    for i in range(len(user_list)):
        print("------------------------------------------------------------------------------------------------")
        print(f"| ID: {user_list[i]["id"]} | User name: {user_list[i]["name"]} | User age: {user_list[i]["age"]} | User phone number: {user_list[i]["contact"]} |")
        print("------------------------------------------------------------------------------------------------")

user_list = []

while True:
    print("\n")
    print("Desired action:")

    action = int(input("""[1] - New user | [2] - Edit an user | [3] - Delete an user | [4] - Users list | [5] - Close application:
    Option: """))

    print("\n")

    if action == 1:
        set_new_user()

    elif action == 3:
        show_users_list()

        

    elif action == 4:
        show_users_list()

    elif action == 5:
        print("Closing application")

        time.sleep(2)

        print("See you later")

        break




