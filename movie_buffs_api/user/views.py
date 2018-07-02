from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from rest_framework import status
from .firebase_config import db, auth
import json


@csrf_exempt
def register(request):
    if request.method == 'POST':
        fields = JSONParser().parse(request)
        data = {
            'first_name': fields['first_name'],
            'last_name': fields['last_name'],
            'age': fields['age'],
            'movies': {}
        }
        try:
            user = auth.create_user_with_email_and_password(fields['email'], fields['password'])
            db.child('users').child(user['localId']).set(data)
            return JsonResponse(user, status=status.HTTP_201_CREATED, safe=False)
        except Exception as e:
            return JsonResponse(e, status=status.HTTP_400_BAD_REQUEST, safe=False)


@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        try:
            user = auth.sign_in_with_email_and_password(data['email'], data['password'])
            return JsonResponse(user, status=status.HTTP_200_OK, safe=False)
        except Exception as e:
            return JsonResponse(e, status=status.HTTP_400_BAD_REQUEST, safe=False)


@csrf_exempt
def logout(request):
    if request.method == 'GET':
        refresh_token = request.GET.get('refresh_token', '')
        auth.refresh(refresh_token)
        return JsonResponse({'logout': True}, status=status.HTTP_200_OK, safe=False)


@csrf_exempt
def get_user_movies(request):
    if request.method == 'GET':
        user_id = request.GET.get('user_id', '')
        try:
            user_movies = db.child('users').child(user_id).child('movies').get().val()
            movies = dict()
            for movie in user_movies:
                movies[movie] = dict(db.child('movies').child(movie).get().val())
            return JsonResponse(movies, status=status.HTTP_200_OK, safe=False)
        except Exception as e:
            return JsonResponse(e, status=status.HTTP_400_BAD_REQUEST, safe=False)


@csrf_exempt
def add_user_movie(request):
    if request.method == 'PUT':
        user_id = request.GET.get('user_id', '')
        imdb_id = request.GET.get('imdb_id', '')
        try:
            db.child('users').child(user_id).child('movies').child(imdb_id).set(imdb_id)
            return JsonResponse({'added movie': True}, status=status.HTTP_200_OK, safe=False)
        except Exception as e:
            return JsonResponse(e, status=status.HTTP_400_BAD_REQUEST, safe=False)


@csrf_exempt
def get_recommended_movies(request):
    if request.method == 'GET':
        user_id = request.GET.get('user_id', '')
        try:
            user_movies = db.child('users').child(user_id).child('movies').get().val()
            movies = dict()
            for movie in user_movies:
                movies[movie] = dict(db.child('movies').child(movie).get().val())
                # make logic for recommended
            return JsonResponse(movies, status=status.HTTP_200_OK, safe=False)
        except Exception as e:
            return JsonResponse(e, status=status.HTTP_400_BAD_REQUEST, safe=False)
