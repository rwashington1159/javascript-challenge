from flask import Flask, render_template

from pymongo import MongoClient


# MONGODB
# connect to mongo
mongodb_url = 'mongodb://localhost:27017'
mongo_client = MongoClient(mongodb_url)

# get handle to mongo db and create collection
mongo_db = mongo_client.team_db
collection = mongo_db.players


# FLASK
# instantiate flask application object
flask_app = Flask(__name__)

# functions for flask routes
@flask_app.route('/')
def home():
    all_players = collection.find()
    return render_template('index.html', players=all_players)


if __name__ == '__main__':
    # start flask server
    flask_app.run(debug=True)

