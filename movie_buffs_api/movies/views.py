from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
import requests
from .firebase_config import db
from urllib import request as req
import re


def get_trailer_youtube_url(title):
    title = title.replace(' ', '+') + '+trailer'
    html_content = req.urlopen("http://www.youtube.com/results?search_query=" + title)
    search_results = re.findall(r'href=\"\/watch\?v=(.{11})', html_content.read().decode())
    trailer_youtube_url = "http://www.youtube.com/embed/" + str(search_results[0])
    return trailer_youtube_url


@csrf_exempt
def search_by_id(request):
    if request.method == 'GET':
        imdb_id = request.GET.get('imdb_id', '')
        movie = requests.get("http://www.omdbapi.com/?apikey=b467032&i=" + imdb_id).json()
        trailer_youtube_url = get_trailer_youtube_url(movie['Title'])
        movie['trailer'] = trailer_youtube_url
        db.child('movies').child(imdb_id).set(movie)
        return JsonResponse({'movie': movie}, status=status.HTTP_200_OK, safe=False)


@csrf_exempt
def search_by_title(request):
    if request.method == 'GET':
        title = request.GET.get('title', '')
        movies = requests.get("http://www.omdbapi.com/?apikey=b467032&s=" + title)
        return JsonResponse(movies.json()['Search'], status=status.HTTP_200_OK, safe=False)


@csrf_exempt
def get_upcoming_movies(request):
    if request.method == 'GET':
        upcoming_movies = db.child('upcoming_movies').get().val()
        if upcoming_movies:
            return JsonResponse(upcoming_movies, status=status.HTTP_200_OK, safe=False)

        movies = requests.get(
            'https://api.themoviedb.org/3/movie/upcoming?api_key=f7048614c1bd3c0ecba329bc8d08bdbc&language=en-US&page=1'
        ).json()['results']
        upcoming_movies = dict()
        for movie in movies:
            try:
                movies_per_search_term = \
                    requests.get("http://www.omdbapi.com/?apikey=b467032&s=" + movie['original_title']).json()[
                        'Search']
                for searched_movie in movies_per_search_term:
                    if searched_movie['Year'] == '2018':
                        upcoming_movies[searched_movie['imdbID']] = searched_movie
                        break
            except:
                pass
        db.child('upcoming_movies').set(upcoming_movies)
        return JsonResponse({upcoming_movies}, status=status.HTTP_200_OK, safe=False)