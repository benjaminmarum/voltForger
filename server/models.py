# imports
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property

from services import DatabaseService

# Create a DatabaseService object
db_service = DatabaseService()

# Get the SQLAlchemy object from the DatabaseService
db = db_service.get_db()
bcrypt = db_service.get_bcrypt()

class User(db.Model,SerializerMixin):
    """
    The User model represents a user in the system.

    Attributes:
        id: A unique identifier for the user.
        username: The user's chosen username. Must be unique.
        email: The user's email address. Must be unique.
        user_type: The type of user account.
        _password_hash: The hashed version of the user's password.
        created_at: The datetime when the user was created.
    """
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique = True, nullable = False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_type = db.Column(db.String)
    _password_hash = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    gamestate = db.relationship("GameState", back_populates = "user")
    serialize_rules = ('-gamestates.users',)

    #next create a hybrid property
    @hybrid_property
    def password_hash(self):
        return self._password_hash

    # Now we create a setter function!
    @password_hash.setter
    def password_hash(self, password):
        #WE NEED THE ENCODE AND DECODE IN PYTHON 3 DUE TO SPECIAL CHARACTERS ∫
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    @validates('email')
    def validate_email(self, key, email):
        """
        Validate the email field. The email must not be empty and must contain an '@' character.
        Args:
            key: The name of the field being validated.
            email: The value of the field being validated.
        Returns:
            The email if it is valid.
        Raises:
            AssertionError: If the email is empty or doesn't contain an '@' character.
        """
        assert email != '', "The email field must not be empty."
        assert '@' in email, "Invalid email address."
        return email
    
    @validates('username')
    def validate_email(self, key, username):
        """
        Validate the email field. The email must not be empty and must contain an '@' character.
        Args:
            key: The name of the field being validated.
            email: The value of the field being validated.
        Returns:
            The email if it is valid.
        Raises:
            AssertionError: If the email is empty or doesn't contain an '@' character.
        """
        assert username != '', "The username field must not be empty."
        assert username <= 30, "Username filled is too long."
        return username

    # Now lets create an authentification route using
    # bcrypt.check_password_hash(_password_hash, password.encode('utf-8'))
    def authenticate(self,password):
        return bcrypt.check_password_hash(self._password_hash,password.encode('utf-8'))
    
class GameState(db.Model,SerializerMixin):
    __tablename__ = 'gamestates'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    game_state = db.Column(db.JSONB)
    saved_at = db.Column(db.DateTime, server_default=db.func.now())

    user = db.relationship('User', back_populates='gamestate')
    serialize_rules = ('-users.gamestates',)
    

    def __repr__(self):
        return f'<GameState {self.id} for User {self.user_id}>'
    
class Building(db.Model,SerializerMixin):
    __tablename__ = 'buildings'

    id = db.Column(db.Integer, primary_key=True)
    building_name = db.Column(db.String(50), nullable=False)
    building_description = db.Column(db.String(200))
    building_icon_path = db.Column(db.String(200))
    building_image_path = db.Column(db.String(200))

    building_level = db.Column(db.Integer, nullable=False)
    building_cost = db.Column(db.Integer, nullable=False)
    building_inputs = db.Column(db.Integer, nullable=False)
    building_output = db.Column(db.Integer, nullable=False)
    building_consumption = db.Column(db.Integer, nullable=False)
    building_production = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Building {self.building_name}>'