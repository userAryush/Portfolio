from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.JSONField()
    features = models.JSONField()
    github_link = models.URLField()
    api_docs_link = models.URLField(blank=True)
    live_link = models.URLField(blank=True)
    status = models.CharField(max_length=50, default='Live')
    category = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    # QA — optional, shown only inside project detail
    qa_testing_type = models.CharField(max_length=100, blank=True)
    qa_description = models.TextField(blank=True)
    qa_tags = models.JSONField(blank=True,default=list)
    qa_total = models.IntegerField(blank=True,default=0)
    qa_passed = models.IntegerField(blank=True,default=0)
    qa_failed = models.IntegerField(blank=True,default=0)
    qa_sheet_link = models.URLField(blank=True)

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)


class AboutSection(models.Model):
    description = models.TextField()

    def __str__(self):
        return "About Me"


class SkillGroup(models.Model):
    title = models.CharField(max_length=200)
    items = models.JSONField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class AcademicCertification(models.Model):
    institute = models.CharField(max_length=200)
    year = models.CharField(max_length=50)
    course = models.CharField(max_length=255)
    gpa = models.CharField(max_length=50, blank=True)
    certificate = models.ImageField(upload_to='academic_certificates/', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.institute} - {self.course}"