from bs4 import BeautifulSoup
import requests


url = 'http://www.nfl.com/scores/2017/REG3'
response = requests.get(url)
html = response.content
soup = BeautifulSoup(html, "html.parser")
mainContainer = soup.find(id="score-boxes")
#mainContainer = soup.find(class_="score-boxes")
scoreBoard = mainContainer.find(class_="scorebox-wrapper")
awayTeam = scoreBoard.find(class_="away-team")
homeTeam = scoreBoard.find(class_="home-team")
awayTeamScore = awayTeam.find(class_="total-score").get_text()
homeTeamScore = homeTeam.find(class_="total-score").get_text()
awayTeamName = awayTeam.find(class_="team-name").find('a').get_text()
homeTeamName = homeTeam.find(class_="team-name").find('a').get_text()
print("Home Team: "+homeTeamName+", Score: "+homeTeamScore)
print("Away Team: "+awayTeamName+", Score: "+awayTeamScore)