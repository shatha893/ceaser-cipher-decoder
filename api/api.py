import time
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/decode', methods=['POST'])
def calculate_ceaser():
    data= request.get_json()
    user_input = data['text'].upper()
    special_characters = "\"\'!\@#$%^&*()-+?_=,<>/"
    brute_force_outputs = []
    for shift_value in range(1,27):
        current_string = ""
        for i in user_input:
            if i == " ":
                current_string = current_string + " "
                continue
            if i in special_characters:
                current_string = current_string + i
                continue
            temp = (ord(i)-66)-shift_value
            if temp<0:
                temp = 26+temp
            current_string = current_string +chr(temp+97)
        brute_force_outputs.append(current_string)
    return {'answers':brute_force_outputs}

# def get_current_time():
#     return {'time': time.time()}