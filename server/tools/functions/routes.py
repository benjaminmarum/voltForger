# routes.py
from resources import RegisterApi, LoginApi, UserApi, LogoutApi

def initialize_routes(api):
    api.add_resource(RegisterApi, '/api/auth/register')
    api.add_resource(LoginApi, '/api/auth/login')
    api.add_resource(UserApi, '/api/auth/user')
    api.add_resource(LogoutApi, '/api/auth/logout')