#!/usr/bin/env python3

#this is all performed by service_manager.py
# server/app.py
# export FLASK_APP=app.py
# export FLASK_RUN_PORT=5555
# flask db init
# flask db revision --autogenerate -m 'Create tables' 
# flask db upgrade 
# Standard imports/boilerplate setup

import os
from dotenv import load_dotenv

#Flask imports
from flask import Flask, request, make_response, jsonify, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from flask_bcrypt import Bcrypt

# Import the DatabaseService class from services.py
from service_manager import ServiceManager
manager = ServiceManager()

# Initialize the app and database

# Get the Flask app, bcrypt, and SQLAlchemy objects
app = manager.get_app()
bcrypt = manager.get_bcrypt()
db = manager.get_db()

from models import User

# Restful setup
api = Api(app)
CORS(app)


@app.route('/')
def index():
    response = make_response(
        '<h1>Welcome to Volt Forge Server!</h1>',
        200
    )
    return response
class CreateUser(Resource):
    def post(self):
        jsoned_request = request.get_json()
        new_user = User(name = jsoned_request["name"],user_type = jsoned_request["user_type"])
        new_user.password_hash = jsoned_request["password"]
        db.session.add(new_user)
        db.session.commit()
api.add_resource(CreateUser, '/signup')

class Login(Resource):
    def post(self):
        jsoned_request = request.get_json()
        user = User.query.filter(User.name == jsoned_request["name"]).first()
        if user.authenticate(jsoned_request["password"]):
            session['user_id'] = user.id
            res = make_response(jsonify(user.to_dict()),200)
            return res
        else:
            res = make_response(jsonify({ "login" : "Invalid User"}),500)
            return res    
api.add_resource(Login, '/login')
class check_login(Resource):
    def get(self):
        user_id = session.get('user_id')
        if user_id:
            user = User.query.filter(User.id == session["user_id"]).first()
            res = make_response(jsonify(user.to_dict()),200)
            return res
api.add_resource(check_login, '/checklogin')

class logout(Resource):
    def delete(self):
        session['user_id'] = None
        res = make_response(jsonify({ "login" : "Logged out"}),200)
        return res
api.add_resource(logout, '/logout')

class get_type(Resource):
    def get(self):
        if session.get("valid"):
            user = User.query.filter(User.id == session["user_id"]).first() 
            res = make_response(jsonify({ "user_type" : user.user_type}),200)
            return res
        else:
            res = make_response(jsonify({ "login" : "invalid user"}),400)
            return res
api.add_resource(get_type, '/get_type')

@app.before_request
def validate():
    if "user_id" in session:
        user = User.query.filter(User.id == session["user_id"]).first()
        if user.user_type == 'Zebra':
            session["valid"] = True
        else:
            session["valid"] = False
    else:
        session["valid"] = False

if __name__ == '__main__':
    app.run(host='172.29.73.120', port=5555) # may need to change host to your Linux/wsl2 ip address or just remove it