from django.shortcuts import render, redirect
from .models import Contact, Project, Qualification
# Create your views here.


def home(request):
    project_obj = Project.objects.order_by('-updated_at')[:4]
    projects = {"projects":project_obj}
    return render(request, 'portfolio_app/home.html',projects)

def contact(request):
    if request.method == "GET":
        return render(request, 'portfolio_app/contact.html')
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        if phone == "":
            phone==None
            
        Contact.objects.create(
            name=name,
            email=email,
            phone=phone,
            message=message
        )
        return redirect('home')
        

def about(request):
    academic_obj = Qualification.objects.filter(qualification_type="AC")
    certification_obj = Qualification.objects.filter(qualification_type="CE")
    education = {"academics":academic_obj,"certifications":certification_obj}
    return render(request, 'portfolio_app/about.html',education)

def projects(request):
    # django_obj = Project.objects.filter(project_type="Dj")
    # figma_obj = Project.objects.filter(project_type="Fg")
    # python_obj = Project.objects.filter(project_type="Py")
    # projects = {"dj_projects":django_obj,"fg_projects":figma_obj,"py_projects":python_obj}
    project_obj = Project.objects.all()
    projects = {"projects":project_obj}
    return render(request, 'portfolio_app/projects.html',projects)
