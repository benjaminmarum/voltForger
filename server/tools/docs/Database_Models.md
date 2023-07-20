# Database Model Structures
In this notebook, we will create examples of model structures for the following tables:
1. Users Table
2. Game State Table
3. Buildings Table
4. User Inventory Table

We will also highlight the database relationships that are important and other relationships that may be leveraged to make building APIs easier and the APIs more useful.

## 1. Users Table
The Users table will store information about each user. Here's an example of what the structure might look like:


```
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True, nullable=False)
    password_hash = Column(String(128), nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    api_key = Column(String(128), unique=True, nullable=False)
    user_type = Column(String(50), nullable=False)
    creation_date = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<User {self.username}>'
```

## 2. Game State Table
The Game State table will store the current state of each user's game. Here's an example of what the structure might look like:


```
class GameState(Base):
    __tablename__ = 'game_states'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    game_state = Column(JSONB)
    last_saved = Column(DateTime, default=datetime.utcnow)

    user = relationship('User', backref='game_states')

    def __repr__(self):
        return f'<GameState {self.id} for User {self.user_id}>'
```

## 3. Buildings Table
The Buildings table will store information about the different buildings that can be constructed in the game. Here's an example of what the structure might look like:


```
class Building(Base):
    __tablename__ = 'buildings'

    id = Column(Integer, primary_key=True)
    building_name = Column(String(50), nullable=False)
    building_description = Column(String(200))
    building_icon = Column(String(200))
    building_cost = Column(Integer, nullable=False)

    def __repr__(self):
        return f'<Building {self.building_name}>'
```

## 4. User Inventory Table
The User Inventory table will store information about which items each user currently has in their inventory. Here's an example of what the structure might look like:


```
class UserInventory(Base):
    __tablename__ = 'user_inventories'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    item_id = Column(Integer, ForeignKey('items.id'))
    quantity = Column(Integer, nullable=False)

    user = relationship('User', backref='user_inventories')
    item = relationship('Item', backref='user_inventories')

    def __repr__(self):
        return f'<UserInventory {self.id} for User {self.user_id} Item {self.item_id}>'
```

## Database Relationships
The relationships between the tables in the database are as follows:

- **Users and Game States**: Each user can have multiple game states, but each game state belongs to only one user. This is a one-to-many relationship from Users to Game States.

- **Users and User Inventories**: Each user can have multiple items in their inventory, but each inventory item belongs to only one user. This is a one-to-many relationship from Users to User Inventories.

- **Items and User Inventories**: Each item can be in the inventory of multiple users, and each inventory item corresponds to one item. This is a one-to-many relationship from Items to User Inventories.

These relationships are important because they allow you to easily query related data. For example, you can easily get all the game states for a particular user, or all the items in a user's inventory. This can be very useful when building APIs, as it allows you to easily fetch all the data you need for a particular user in a single query.
