import pymongo
from flask import Flask,send_from_directory, jsonify, request
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from pymongo import MongoClient
from flask_bcrypt import Bcrypt
from schema.users import validate_user
import urllib
from flask_cors import CORS, cross_origin

# Making a Connection with MongoClient
client = MongoClient("mongodb+srv://purva:"+ urllib.parse.quote_plus("purva@123")+ "@cluster0.fsrda.mongodb.net/gdiDB?retryWrites=true&w=majority")
# database
db = client["app_database"]
# collection
user = db["User"]

app = Flask(__name__,static_folder='client/build',static_url_path='')
cors = CORS(app)
jwt = JWTManager(app)
flask_bcrypt = Bcrypt(app)

# JWT Config
app.config["JWT_SECRET_KEY"] = "this-is-secret-key" #change it

app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route("/api/dashboard/", methods=["GET"])
@jwt_required()
@cross_origin()
def dasboard():
    current_user = get_jwt_identity()
    return jsonify(message="Welcome! to the Data Science Learner "+ current_user)


@app.route("/api/register/", methods=["POST"])
@cross_origin()
def register():
    email = request.get_json()["email"].lower()
    # test = User.query.filter_by(email=email).first()
    test = user.find_one({"email": email})
    if test:
        return jsonify(message="User Already Exist"), 409
    else:
        ''' register user endpoint '''
        data = validate_user(request.get_json())
        if data['ok']:
            data = data['data']
            first_name = data["first_name"]
            last_name = data["last_name"]
            password = data["password"]
            password = flask_bcrypt.generate_password_hash(password)
            email = data["email"].lower()
            user_info = dict(first_name=first_name, last_name=last_name, email=email, password=password)
            user.insert_one(user_info)
            return jsonify(message="User added sucessfully"), 201
       
        else:
            return jsonify({'ok': False, 'message': 'Bad request parameters: {}'.format(data['message'])}), 400
       


@app.route("/api/login/", methods=["POST"])
@cross_origin()
def login():
    email = request.json["email"]
    password = request.json["password"]
    
    test = user.find_one({"email": email})
    
    if test and flask_bcrypt.check_password_hash(test['password'],password):
        access_token = create_access_token(identity=email)
        return jsonify(message="Login Succeeded!", access_token=access_token), 201
    else:
        return jsonify(message="Bad Email or Password"), 401

@app.errorhandler(404)   
def not_found(e):   
  return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(debug=True)    
