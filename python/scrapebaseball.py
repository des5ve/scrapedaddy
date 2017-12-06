from bs4 import BeautifulSoup
import pandas as pd
import requests

url = 'http://www.foxsports.com/mlb/scores?season=2017&date=2017-10-06'
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

mainContainer = soup.find(class_ ="wisbb_body")
print (mainContainer)
