from bs4 import BeautifulSoup
import requests


url = 'http://www.espn.com/mlb/scoreboard'
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")
mainContainer = soup.find(id="main-container")
scoreBoard = mainContainer.find_all(id="scoreboard-page")
print(scoreBoard)

#table = soup.find_all("article")
# for link in soup.find_all("section"):
# 	print(link)
