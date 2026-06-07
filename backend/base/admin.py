from django.contrib import admin

from .models import AboutSection, AcademicCertification, ContactMessage, Project, SkillGroup


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "status", "category", "created_at")


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "sent_at")


@admin.register(AcademicCertification)
class AcademicCertificationAdmin(admin.ModelAdmin):
    list_display = ("institute", "year", "course", "gpa", "certificate", "created_at")


@admin.register(SkillGroup)
class SkillGroupAdmin(admin.ModelAdmin):
    list_display = ("title", "order")


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ("__str__",)
