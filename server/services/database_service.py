import os
from dotenv import load_dotenv

from flask import Flask
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_restful import Api
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData


class DatabaseService:
    """
    The DatabaseService class encapsulates the setup and configuration of the Flask, Bcrypt, 
    and SQLAlchemy objects used in the application.
    """
    def __init__(self):
        """
        Initialize the DatabaseService object.
        """
        self.app = Flask(__name__)
        self.bcrypt = Bcrypt(self.app)
        self.metadata = MetaData(naming_convention={
            "ix": "ix_%(column_0_label)s",
            "uq": "uq_%(table_name)s_%(column_0_name)s",
            "ck": "ck_%(table_name)s_%(constraint_name)s",
            "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
            "pk": "pk_%(table_name)s"
        })
        self.db = SQLAlchemy(metadata=self.metadata)

        # Load environment variables
        load_dotenv()
        user = os.getenv('POSTGRESQL_USER')
        password = os.getenv('POSTGRESQL_PASSWORD')
        host = os.getenv('POSTGRESQL_HOST')
        port = os.getenv('POSTGRESQL_PORT')
        database = os.getenv('POSTGRESQL_DB')
        connection_string = f"postgresql://{user}:{password}@{host}:{port}/{database}"

        # Configure the Flask app and initialize SQLAlchemy
        self.app.config['SQLALCHEMY_DATABASE_URI'] = connection_string
        self.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        self.db.init_app(self.app)
    
    def create_migration(self, message='Database updated'):
        with self.app.app_context():
            migration_directory = os.path.join(os.path.abspath(os.getcwd()), 'migrations')
            if not os.path.exists(migration_directory):
                print('Creating initial migration...')
                os.system('flask db init')
            print('Creating migration script...')
            os.system(f'flask db migrate -m "{message}"')

    def upgrade_db(self):
        with self.app.app_context():
            print('Upgrading database...')
            os.system('flask db upgrade')

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
