from django.db import models


class MovieTrailers(models.Model):
    imdb_id = models.CharField(max_length=10)
    trailer_url = models.CharField(max_length=3000)