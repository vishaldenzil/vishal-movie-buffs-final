<<<<<<< HEAD
from django.urls import path
=======
from django.urls import path, include
>>>>>>> 604030a... made user api
from .views import *

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
<<<<<<< HEAD
    path('logout/', logout, name='logout'),
    path('movies/', get_user_movies, name='user_movies'),
    path('add_movie/', add_user_movie, name='add_movie'),
=======
    path('logout/', logout, name='logout')
>>>>>>> 604030a... made user api
]
