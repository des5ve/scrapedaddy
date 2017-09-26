from bs4 import BeautifulSoup
import requests


url = 'http://www.nfl.com/scores'
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")
mainContainer = soup.find(id="score-boxes")
scores = mainContainer.find_all(class_ = "total-score")
print (scores)
