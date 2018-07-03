from django.urls import path
from .views import *

urlpatterns = [
    path('search_id/', search_by_id, name='search_by_id'),
    path('search_title/', search_by_title, name='search_by_title'),
    path('upcoming_movies/', get_upcoming_movies, name='upcoming')
]
