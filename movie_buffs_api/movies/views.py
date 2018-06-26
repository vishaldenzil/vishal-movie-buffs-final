from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
import requests


@csrf_exempt
def search_by_id(request):
    if request.method == 'GET':
        imdb_id = request.GET.get('imdb_id', '')
        movie = requests.get("http://www.omdbapi.com/?apikey=b467032&i=" + imdb_id)
        return JsonResponse({'movie': movie.json()}, status=status.HTTP_200_OK)


@csrf_exempt
def search_by_title(request):
    if request.method == 'GET':
        title = request.GET.get('title', '')
        movies = requests.get("http://www.omdbapi.com/?apikey=b467032&s=" + title)
        return JsonResponse(movies.json()['Search'], status=status.HTTP_200_OK)
