from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=10, blank=True, null=True)
    message = models.TextField()
    date = models.DateField(auto_now_add=True)
    

    