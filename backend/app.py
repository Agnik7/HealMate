#main entrypoint for the program.

# Importing the libraries and dependencies
from functools import wraps
import os
import requests
from flask import Flask, jsonify,request, session
from flask_cors import CORS
from flask_session import Session
from generate.generate_list import Generate
from database.database import Database
#Working Code
gemini_api_key = os.environ.get("GEMINI_API_KEY")
FLASK_SECRET_KEY = os.environ.get("FLASK_SECRET_KEY")
app = Flask(__name__)
app.secret_key = FLASK_SECRET_KEY
app.config['SESSION_TYPE'] = 'filesystem'
app.config.update(
    SESSION_COOKIE_SAMESITE="None",
    SESSION_COOKIE_SECURE=True,
    SESSION_COOKIE_HTTPONLY=True
)
Session(app)
CORS(app, supports_credentials=True, resources={
    r"/*": {
        "origins": "*",
        "allow_headers": ["Content-Type", "Authorization"],
        "methods": ["GET", "POST", "PUT", "DELETE"]
    }
})


def login_required(function):
    @wraps(function)
    def wrap(*args,**kwargs):
        if 'user' in session:
            request.user = session['user']
        return function(*args, **kwargs)
    return wrap

@app.route('/login', methods=['POST'])
def login():
    """ 
    Function to authenticate and login the user.

    Args: None
    
    Returns:
        JSON: JSON containing the user data upon successful login.
    """
    access_token = request.json.get('access_token')
    userinfo_url = "https://www.googleapis.com/oauth2/v3/userinfo"
    params = {'access_token': access_token}
    response = requests.get(userinfo_url, params=params)

    if response.status_code == 200:
        user_data = response.json()
        if user_data.get('email_verified', False):
            # Start a session
            session['user'] = user_data
            name = user_data['name']
            email = user_data['email']
            picture = user_data['picture']
            print(f"{email}\n{picture}")
            database = Database()
            token = database.user_login(name,email,picture)
            email_verified = user_data['email_verified']
            sub = user_data['sub']
            #Database Inserting line will go here
            return jsonify({'status': 'success', 'user': user_data}), 200
        
        else:
            return jsonify({'status': 'error', 'message': 'Email not verified'}), 401
    else:
        return jsonify({'status': 'error', 'message': 'Failed to fetch user data'}), response.status_code


@app.route('/get_text_diagnosis', methods=['POST','GET'])
@login_required
def get_text_diagnosis():
    """ 
    Function to generate and return the list of doctors based on symptoms

    Args: None
    
    Returns:
        JSON: JSON containing the list of all nearby doctors
    """
    user_email = request.args.get('email')
    print(f"============EMAIL : {user_email}==========")
    symptoms = request.args.get('symptoms')
    location=request.args.get('location')
    generate = Generate(gemini_api_key)
    text = generate.get_text_list(location,symptoms,user_email)
    #List inserting into database will go here
    if text:
        return jsonify({'status': 'success', 'data': text}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Could not generate text'}), 500


@app.route('/get_image_diagnosis', methods=['POST','GET'])
def get_image_diagnosis():
    """ 
    Function to generate and return the list of doctors based on image given by user

    Args: None
    
    Returns:
        JSON: JSON containing the markdown upon successful generation.
    """
    user_email = request.form.get('user_email')
    image = request.files.get('image')  # Access image as a file object
    location = request.form.get('location')
    generate = Generate(gemini_api_key)
    text = generate.get_image_list(location,image,user_email)
    #List inserting into database will go here 
    if text:
        return jsonify({'status': 'success', 'data': {"disease":text}}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Could not generate text'}), 500

@app.route('/logout', methods=['POST'])
def logout():
    """ 
    Function to Log out the user.

    Args: None

    Returns:
        JSON: JSON indicating if user successfully logged out.
    """
    session.clear()
    return jsonify({"Success": "User Successfully Logged Out"}), 200


if __name__ == "__main__":
    app.run(port=9000, debug=True)