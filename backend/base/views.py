from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import AboutSection, AcademicCertification, Project, SkillGroup
from .serializers import AboutSectionSerializer, AcademicCertificationSerializer, ContactSerializer, ProjectSerializer, SkillGroupSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer


class AcademicCertificationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AcademicCertification.objects.all()
    serializer_class = AcademicCertificationSerializer


class SkillGroupViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SkillGroup.objects.all()
    serializer_class = SkillGroupSerializer


class AboutView(APIView):
    def get(self, request):
        about = AboutSection.objects.first()
        if about is None:
            return Response({}, status=status.HTTP_404_NOT_FOUND)
        return Response(AboutSectionSerializer(about).data)


class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Sent!"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
