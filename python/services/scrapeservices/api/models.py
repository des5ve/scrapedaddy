from __future__ import unicode_literals
from django.db import models

# Create your models here.

class NFLScore(models.Model):
  gameId = models.BigIntegerField()
  homeTeam = models.TextField()
  homeScore = models.IntegerField()
  homeq1Score =  models.IntegerField();
  homeq2Score =  models.IntegerField();
  homeq3Score =  models.IntegerField();
  homeq4Score =  models.IntegerField();
  homeWins =  models.IntegerField();
  homeLosses = models.IntegerField();
  awayTeam = models.TextField();
  awayScore = models.IntegerField();
  awayq1Score =  models.IntegerField();
  awayq2Score =  models.IntegerField();
  awayq3Score =  models.IntegerField();
  awayq4Score =  models.IntegerField();
  awayWins =  models.IntegerField();
  awayLosses =  models.IntegerField();
  gameStatus = models.TextField();
  currentQuarter = models.IntegerField();
  currentTime = models.TextField();
  gameTime = models.DateTimeField();


