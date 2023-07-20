# Import necessary modules
import os  # This module provides a way of using operating system dependent functionality
from dotenv import load_dotenv  # This module loads environment variables from a .env file
from pathlib import Path # This module offers classes representing filesystem paths with semantics appropriate for different operating systems
from flask import Flask  # Flask is a micro web framework written in Python
from flask_bcrypt import Bcrypt  # Bcrypt is a Flask extension that provides Bcrypt hashing utilities for your application
from flask_migrate import Migrate  # Handles SQLAlchemy database migrations for Flask applications using Alembic
from flask_restful import Api  # This is an extension for Flask that adds support for quickly building REST APIs
from flask_cors import CORS  # This is a Flask extension for handling Cross Origin Resource Sharing (CORS), making cross-origin AJAX possible
from flask_sqlalchemy import SQLAlchemy  # SQLAlchemy is a SQL toolkit and Object-Relational Mapping (ORM) system for Python, Flask-SQLAlchemy is an extension for Flask that adds support for SQLAlchemy
from sqlalchemy import MetaData  # MetaData is a container object that keeps together many different features of a database (or multiple databases) being described

env_path = Path('../..') / '.env'  # If the .env file is one level up in the directory structure
load_dotenv(dotenv_path=env_path)

class DatabaseService:
    """
    The DatabaseService class encapsulates the setup and configuration of the Flask, Bcrypt, 
    and SQLAlchemy objects used in the application.
    """
    def __init__(self):
        """
        Initialize the DatabaseService object.
        """
        self.app = Flask(__name__)  # Create a new Flask application
        self.bcrypt = Bcrypt(self.app)  # Initialize Bcrypt for the app
        # Define a naming convention for SQL Alchemy to use with Alembic migrations
        self.metadata = MetaData(naming_convention={
            "ix": "ix_%(column_0_label)s",
            "uq": "uq_%(table_name)s_%(column_0_name)s",
            "ck": "ck_%(table_name)s_%(constraint_name)s",
            "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
            "pk": "pk_%(table_name)s"
        })
        self.db = SQLAlchemy(metadata=self.metadata)  # Initialize SQLAlchemy with the defined metadata

        # Load environment variables
        load_dotenv()
        user = os.getenv('POSTGRESQL_USER')  # Get the PostgreSQL user from an environment variable
        password = os.getenv('POSTGRESQL_PASSWORD')  # Get the PostgreSQL password from an environment variable
        host = os.getenv('POSTGRESQL_HOST')  # Get the PostgreSQL host from an environment variable
        port = os.getenv('POSTGRESQL_PORT')  # Get the PostgreSQL port from an environment variable
        database = os.getenv('POSTGRESQL_DB')  # Get the PostgreSQL database from an environment variable
        connection_string = f"postgresql://{user}:{password}@{host}:{port}/{database}"  # Create the connection string

        # Configure the Flask app and initialize SQLAlchemy
        self.app.config['SQLALCHEMY_DATABASE_URI'] = connection_string  # Set the SQLAlchemy database URI
        self.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Suppress a warning message about tracking modifications
        self.db.init_app(self.app)  # Bind the SQLAlchemy object to the Flask app

    def create_migration(self, message='Database updated'):
        with self.app.app_context():  # Use the application context
            migration_directory = os.path.join(os.path.abspath(os.getcwd()), 'migrations')  # Define the migrations directory
            if not os.path.exists(migration_directory):  # If the migrations directory doesn't exist...
                print('Creating initial migration...')  # Print a message
                os.system('flask db init')  # Initialize the database with Flask-Migrate
            print('Creating migration script...')  # Print a message
            os.system(f'flask db migrate -m "{message}"')  # Create a new migration

    def upgrade_db(self):
        with self.app.app_context():  # Use the application context
            print('Upgrading database...')  # Print a message
            os.system('flask db upgrade')  # Upgrade the database to the latest migration

    def get_app(self):
        """
        Returns the Flask app object.
        """
        return self.app

    def get_bcrypt(self):
        """
        Returns the Bcrypt object.
        """
        return self.bcrypt

    def get_db(self):
        """
        Returns the SQLAlchemy object.
        """
        return self.db