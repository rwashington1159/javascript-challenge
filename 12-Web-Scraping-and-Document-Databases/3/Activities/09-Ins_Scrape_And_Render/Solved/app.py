from flask import Flask, render_template, redirect
from pymongo import MongoClient
import scrape_craigslist

app = Flask(__name__)

# Use pymongo to set up mongo connection
mongo_url = "mongodb://localhost:27017"
client = MongoClient(mongo_url)
db = client.craigslist_db

@app.route("/")
def index():
    listings = db.houston_listings.find_one()
    return render_template("index.html", listings=listings)


@app.route("/scrape")
def scraper():
    listings = db.houston_listings
    listings_data = scrape_craigslist.scrape()
    listings.update({}, listings_data, upsert=True)
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)
