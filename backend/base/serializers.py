from rest_framework import serializers

from .models import AboutSection, AcademicCertification, ContactMessage, Project, SkillGroup


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["name", "email", "message"]


class AcademicCertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicCertification
        fields = "__all__"


class SkillGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillGroup
        fields = "__all__"


class AboutSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSection
        fields = "__all__"
