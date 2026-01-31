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
        ('FS' , 'Full Stack')
    ]
    STATUS_CHOICES = [
    ('Comp', 'Completed'),
    ('Live', 'Live'), # If you actually host it later
    ('Dev', 'In Development')]
    title = models.CharField(max_length=100)
    project_type = models.CharField(max_length=2, choices=TYPES_CHOICE)
    
    status = models.CharField(max_length=4, choices=STATUS_CHOICES, default='Dev')
    
    problem_statement = models.TextField(help_text="What was the challenge?", default = "problem_statement", blank=True, null=True)
    solution_statement = models.TextField(help_text="How did you solve it?", default = "solution_statement", blank=True, null=True)
    technical_breakdown = models.TextField(help_text="The deep dive/README content.", default = "technical_breakdown", blank=True, null=True)
    # --------------------------------------

    description = models.TextField(help_text="Used for the project card preview.")
    tech_stack = models.JSONField(default=list)
    vedio = models.FileField(upload_to="static/videos/", blank=True, null=True)
    github_link = models.URLField(null=True, blank=True)
    project_link = models.URLField(null=True, blank=True)
    figma_link = models.URLField(null=True, blank=True)
    is_pinned = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-is_pinned', '-created_at']

    def __str__(self):
        return self.title   
    


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

    
    
    

    