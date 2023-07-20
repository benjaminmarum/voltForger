
from services import DatabaseService

class ServiceManager:
    def __init__(self):
        self.db_service = DatabaseService()
        self.parser = argparse.ArgumentParser()

    def setup_argparse(self):
        # Add commands to the parser
        self.parser.add_argument('--run-app', action='store_true')
        self.parser.add_argument('--create-migration', type=str)

    def setup_service(self):
        # Parse the command line arguments
        args = self.parser.parse_args()

        # If the 'run-app' command was given, run the app
        if args.run_app:
            self.app = self.db_service.run_app()

        # If the 'create-migration' command was given, create a migration
        if args.create_migration:
            self.db_service.create_migration(args.create_migration)

        # Upgrade the database
        self.db_service.upgrade_db()

    def get_app(self):
        return self.db_service.get_app()

    def get_db(self):
        return self.db_service.get_db()

    def get_bcrypt(self):
        return self.db_service.get_bcrypt()