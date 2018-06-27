from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
import requests
from .firebase_config import db
from urllib import request as req
import re


def get_trailer_youtube_url(imdb_id):
    title = db.child('movies').child(imdb_id).child('Title').get().val().replace(' ', '+') + '+trailer'
    html_content = req.urlopen("http://www.youtube.com/results?search_query=" + title)
    search_results = re.findall(r'href=\"\/watch\?v=(.{11})', html_content.read().decode())
    trailer_youtube_url = "http://www.youtube.com/watch?v=" + str(search_results[0])
    return trailer_youtube_url


@csrf_exempt
def search_by_id(request):
    if request.method == 'GET':
        imdb_id = request.GET.get('imdb_id', '')
        movie = requests.get("http://www.omdbapi.com/?apikey=b467032&i=" + imdb_id).json()
        db.child('movies').child(imdb_id).set(movie)
        trailer_youtube_url = get_trailer_youtube_url(imdb_id)
        movie['trailer'] = trailer_youtube_url
        return JsonResponse({'movie': movie}, status=status.HTTP_200_OK, safe=False)


@csrf_exempt
def search_by_title(request):
    if request.method == 'GET':
        title = request.GET.get('title', '')
        movies = requests.get("http://www.omdbapi.com/?apikey=b467032&s=" + title)
        return JsonResponse(movies.json()['Search'], status=status.HTTP_200_OK, safe=False)
