# Import necessary modules
import argparse  # This module makes it easy to write user-friendly command-line interfaces
from flask_migrate import Migrate  # Handles SQLAlchemy database migrations for Flask applications using Alembic
from flask_restful import Api  # This is an extension for Flask that adds support for quickly building REST APIs
from flask_cors import CORS  # This is a Flask extension for handling Cross Origin Resource Sharing (CORS), making cross-origin AJAX possible
from services.database_service import DatabaseService  # This is the custom class that encapsulates the database operations

# Define the ServiceManager class
class ServiceManager:
    """
    This class is responsible for managing the services in our application.
    This includes initializing and running the app, initializing the database, and handling migrations.
    """
    def __init__(self):
        """
        This method is automatically run when an instance of the class is created.
        It initializes the DatabaseService, sets up argument parsing, and gets the Flask app from the DatabaseService.
        """
        print("Creating DatabaseService...")
        self.db_service = DatabaseService()  # Create an instance of DatabaseService
        self.parser = argparse.ArgumentParser(
            description="""Manage your Flask app and database.

            Quickstart Guide:
            1. Setup your Environment Variables: Make sure you have set up your environment variables in a .env file.
            2. Initialize the App: Run `python app.py --init-app` to initialize your Flask app.
            3. Initialize the Database: Run `python app.py --init-db` to initialize your database.
            4. Run the App: To run your app, use the command `python app.py --run-app`.
            5. Create a Migration: If you want to create a migration, run `python app.py --create-migration "Your migration message"`.
            6. Upgrade the Database: To upgrade your database to the latest migration, run `python app.py --upgrade-db`.
            """
        )  # Initialize a new ArgumentParser object
        self.app = self.db_service.app  # Get the Flask app object from the DatabaseService instance

    def setup_argparse(self):
        """
        This method sets up command line argument parsing.
        It adds several commands that can be used when running the script from the command line.
        """
        print("Setting up argparse...")
        # Add commands to the parser
        self.parser.add_argument('--init-app', action='store_true', help="Initialize the Flask app.")  # If --init-app is passed in the command line, set the 'init_app' attribute to True
        self.parser.add_argument('--init-db', action='store_true', help="Initialize the database.")  # If --init-db is passed in the command line, set the 'init_db' attribute to True
        self.parser.add_argument('--run-app', action='store_true', help="Run the Flask app.")  # If --run-app is passed in the command line, set the 'run_app' attribute to True
        self.parser.add_argument('--create-migration', type=str, help="Create a database migration. Requires a message.")  # If --create-migration is passed in the command line, set the 'create_migration' attribute to the string passed with the command
        self.parser.add_argument('--upgrade-db', action='store_true', help="Upgrade the database to the latest migration.")  # If --upgrade-db is passed in the command line, set the 'upgrade_db' attribute to True

    def init_app(self):
        """
        This method initializes the Flask app.
        It sets several configuration values, including the database URI and secret key.
        """
        print("Initializing app...")
        # Configure the Flask app
        self.app.config['SQLALCHEMY_DATABASE_URI'] = self.db_service.connection_string  # Set the SQLAlchemy database URI
        self.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Suppress a warning message about tracking modifications
        self.app.json.compact = False  # Set the JSONIFY responses to not be compacted (whitespace is not removed)
        self.app.secret_key = os.getenv('SECRET_KEY')  # Get the secret key from an environment variable
        if not self.app.secret_key:
            raise RuntimeError("SECRET_KEY environment variable is not set!")  # Raise an error if the secret key is not set
        print("App initialized.")
        return self.app

    def init_db(self):
        """
        This method initializes the database.
        It binds the SQLAlchemy object to the Flask app, sets up migrations, and handles CORS.
        """
        print("Initializing database...")
        # Initialize the database
        self.db_service.db.init_app(self.app)  # Bind the SQLAlchemy object to the Flask app
        self.migrate = Migrate(self.app, self.db_service.db)  # Initialize a new Migrate object to handle database migrations
        self.api = Api(self.app)  # Initialize a new Api object to handle the creation of REST APIs
        CORS(self.app)  # Initialize a new CORS object to handle CORS policies
        print("Database initialized.")
        return self.app

    def run_app(self):
        """
        This method runs the Flask app.
        """
        print("Running app...")
        self.app.run()  # Run the Flask app

    def upgrade_db(self):
        """
        This method upgrades the database to the latest migration.
        """
        print("Upgrading database...")
        self.db_service.upgrade_db()  # Upgrade the database using the DatabaseService's method

    def setup_service(self):
        """
        This method sets up the service.
        It parses command line arguments and calls the appropriate methods based on those arguments.
        """
        print("Setting up service...")
        # Parse the command line arguments
        args = self.parser.parse_args()
        # Depending on the arguments passed in the command line, call the appropriate methods
        if args.init_app:  # If --init-app was passed in the command line...
            self.init_app()  # Initialize the app
        if args.init_db:  # If --init-db was passed in the command line...
            self.init_db()  # Initialize the database
        if args.run_app:  # If --run-app was passed in the command line...
            self.run_app()  # Run the app
        if args.create_migration:  # If --create-migration was passed in the command line...
            print(f"Creating migration with message '{args.create_migration}'...")
            self.db_service.create_migration(args.create_migration)  # Create a migration with the specified message
        if args.upgrade_db:  # If --upgrade-db was passed in the command line...
            self.upgrade_db()  # Upgrade the database

    # Getter methods
    def get_app(self):
        """
        This method returns the Flask app object.
        """
        return self.db_service.get_app()  # Return the Flask app object
    def get_bcrypt(self):
        """
        This method returns the Bcrypt object.
        """
        return self.db_service.get_bcrypt()  # Return the Bcrypt object
    def get_db(self):
        """
        This method returns the SQLAlchemy object.
        """
        return self.db_service.get_db()  # Return the SQLAlchemy object
