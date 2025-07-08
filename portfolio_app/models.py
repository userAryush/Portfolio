from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=10, blank=True, null=True)
    message = models.TextField()
    date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} sent a message on {self.date}"
    
class Project(models.Model):
    TYPES_CHOICE = [
        ('Dj', 'Django'),
        ('Py', 'Python'),
        ('Fg', 'Figma'),
    ]
    title = models.CharField(max_length=100)
    project_type = models.CharField(max_length=2,choices=TYPES_CHOICE)
    description = models.TextField()
    tech_stack = models.JSONField(default=list)
    vedio = models.FileField(upload_to="static/videos/",blank=True,null=True)
    github_link = models.URLField(null=True,blank=True)
    project_link = models.URLField(null=True,blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
from django.db import models

class Qualification(models.Model):
    QUALIFICATION_CHOICES = [
        ('AC', 'Academic'),
        ('CE', 'Certification'),
    ]

    qualification_type = models.CharField(max_length=2, choices=QUALIFICATION_CHOICES)
    institute = models.CharField(max_length=100)
    year = models.CharField(max_length=20)
    title = models.CharField(max_length=100)  # Degree or Certificate title
    gpa = models.FloatField(null=True, blank=True)
    certificate = models.ImageField(upload_to="static/images/",null=True,blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - {self.get_qualification_type_display()}"

    
    
    

    