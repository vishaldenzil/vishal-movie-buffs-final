from django.urls import path, include
from .views import *

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('logout/', logout, name='logout'),
    path('movies/', get_user_movies, name='user_movies'),
    path('addmovie/', add_user_movie, name='add_movie'),
]
