import time
from flask import Flask

app = Flask(__name__)

@app.route('/')
def get_current_time():
    return {'time': time.time()}


#____THE CEASER CODE DECODING CODE____
#user_input = KLMNOPQRSTUVWXYZABCDEFGHIJ (cipher text) => for now I want to decrypt it
# ___1___ BRUTE FORCE____
# def calculate_ceaser(user_input):
#    special_characters = "\"\'!\@#$%^&*()-+?_=,<>/"
#    brute_force_outputs = []
#    for shift_value in range(1,27):
#       current_string = ""
#       for i in user_input:
#          if i == " ":
#             current_string = current_string + " "
#             continue
#          if i in special_characters:
#             current_string = current_string + i
#             continue
#          temp = (ord(i)-66)-shift_value
#          if temp<0:
#             temp = 26+temp
#          current_string = current_string +chr(temp+97)
#       brute_force_outputs.append(current_string)
#    return brute_force_outputs


# output = calculate_ceaser("Grox iye gobo robo lopybo S myevnx'd vyyu iye sx dro oioc".upper())
# for i in output:
#    print(i+"\n")