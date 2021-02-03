from pymongo import MongoClient

# connect to mongo
mongodb_url = 'mongodb://localhost:27017'
mongo_client = MongoClient(mongodb_url)

# get handle to mongo db and create collection
mongo_db = mongo_client.team_db
collection = mongo_db.players

# function to insert data into players collection
def insert_players_in_db():
    players_lst = [
        {'name':'Frodo', 'position': 'center forward'},
        {'name':'Samwell', 'position': 'goal keeper'},
        {'name':'Aragorn', 'position': 'second striker'}
    ]
    collection.insert_many(players_lst)
    return

if __name__ == '__main__':
    # insert data in db
    insert_players_in_db()