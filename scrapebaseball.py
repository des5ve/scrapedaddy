from bs4 import BeautifulSoup
import pandas as pd
import requests


url = 'https://www.mlb.com/scores/2017-09-01'
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")

mainContainer = soup.find(id = "scores_index")
scoreboard = mainContainer.find(class_ = "l-grid__content l-grid__content--none")
scores = scoreboard.find(class_ = "mlb-scores mlb-scores--responsive mlb-scores--desktop")

mainScoresContainer = soup.find(class_ = "mlb-scores")

print (mainScoresContainer)