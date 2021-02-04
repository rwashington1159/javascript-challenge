from bs4 import BeautifulSoup as bs
import requests
import time


def scrape_info():

    # Visit visitcostarica.herokuapp.com
    url = "https://visitcostarica.herokuapp.com/"

    # Scrape page into Soup
    response = requests.get(url)
    soup = bs(response.text, "lxml")
    
    # Get the min avg temp
    # @TODO: YOUR CODE HERE!
    
    # Get the max avg temp
    # @TODO: YOUR CODE HERE!
    

    # BONUS: Find the src for the sloth image
    # @TODO: YOUR CODE HERE!
    

    # Store data in a dictionary
    costa_data = {
        "sloth_img": sloth_img,
        "min_temp": min_temp,
        "max_temp": max_temp
    }

    # Return results
    return costa_data
