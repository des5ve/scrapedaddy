from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.response import Response
from .models import NFLScore
from .serializers import NFLScoreSerializer

# Create your views here.

class NFLScoreList(generics.ListAPIView):
    queryset = NFLScore.objects.all()
    serializer_class = NFLScoreSerializer
