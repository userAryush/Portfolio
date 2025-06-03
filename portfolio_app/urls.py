from django.contrib import admin
from django.urls import path
from .views import home, contact, about, projects

urlpatterns = [
    path('', home, name="home"),
    path('aryush/contact/', contact, name="contact"),
    path('aryush/about/', about, name="about"),
    path('aryush/projects/', projects, name="projects"),
]