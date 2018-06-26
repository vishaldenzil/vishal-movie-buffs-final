from django.db import models
from .firebase_config import auth, db


class User(models.Model):
    first_name = models.CharField(max_length=100, blank=False)
    last_name = models.CharField(max_length=100, blank=True)
    age = models.IntegerField(blank=False)
    email = models.EmailField(blank=False)
    password = models.CharField(max_length=100, blank=False)

    def save(self, *args, **kwarg):
        user = auth.create_user_with_email_and_password(self.email, self.password)
        data = {
            'first_name': self.first_name,
            'last_name': self.last_name,
            'age': self.age,
            'movies': []
        }
        db.child('users').child(user['localId']).set(data)
