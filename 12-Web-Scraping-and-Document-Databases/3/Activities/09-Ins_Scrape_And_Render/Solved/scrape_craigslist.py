import requests
from bs4 import BeautifulSoup

def scrape():
    listings = {}

    url = "https://houston.craigslist.org/search/hhh?"
    response = requests.get(url)
    
    soup = BeautifulSoup(response.text, "lxml")

    listings["headline"] = soup.find("a", class_="result-title").get_text()
    listings["price"] = soup.find("span", class_="result-price").get_text()
    listings["hood"] = soup.find("span", class_="result-hood").get_text()

    return listings
