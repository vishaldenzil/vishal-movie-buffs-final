from django.urls import path
from .views import *

urlpatterns = [
    path('search_by_id/', search_by_id, name='search_by_id'),
    path('search_by_title/', search_by_title, name='search_by_title'),
]
