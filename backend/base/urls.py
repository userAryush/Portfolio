from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import AboutView, AcademicCertificationViewSet, ContactView, ProjectViewSet, SkillGroupViewSet

router = DefaultRouter()
router.register("projects", ProjectViewSet, basename="project")
router.register("academics", AcademicCertificationViewSet, basename="academic")
router.register("skills", SkillGroupViewSet, basename="skill")

urlpatterns = [
    path("", include(router.urls)),
    path("contact/", ContactView.as_view(), name="contact"),
    path("about/", AboutView.as_view(), name="about"),
]
