from .models import NFLScore
from rest_framework import serializers

class NFLScoreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NFLScore
        fields = ('gameId','homeTeam','homeScore','homeq1Score',
        'homeq2Score', 'homeq3Score', 'homeq4Score','homeWins','homeLosses',
        'awayTeam','awayScore','awayq1Score','awayq2Score','awayq3Score','awayq4Score',
        'awayWins','awayLosses','gameStatus','currentQuarter','currentTime','gameTime')