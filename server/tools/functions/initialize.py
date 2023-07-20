import sys
sys.path.append("../../")
from service_manager import ServiceManager


# Create an instance of ServiceManager
manager = ServiceManager()

# Initialize the app and the database
manager.init_app()
manager.init_db()
