from django.shortcuts import render, redirect, get_object_or_404
from .models import Contact, Project, Qualification
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.


def home(request):
    project_obj = Project.objects.order_by('-updated_at')[:4]
    projects = {"projects":project_obj}
    return render(request, 'portfolio_app/home.html',projects)


def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone') or "Not provided"
        message = request.POST.get('message')

        # 1. Save to Database (Your existing code)
        Contact.objects.create(name=name, email=email, phone=phone, message=message)

        # 2. Send Email to yourself
        subject = f"New Portfolio Contact from {name}"
        full_message = f"""
        You have received a new message from your portfolio contact form:
        
        Name: {name}
        Email: {email}
        Phone: {phone}
        
        Message:
        {message}
        """
        
        send_mail(
            subject,
            full_message,
            settings.DEFAULT_FROM_EMAIL, # From your Gmail
            ['khatriaryush@gmail.com'],   # To your Gmail
            fail_silently=False,
        )

        return redirect('home')
    
    return render(request, 'portfolio_app/contact.html')
        

def about(request):
    academic_obj = Qualification.objects.filter(qualification_type="AC")
    certification_obj = Qualification.objects.filter(qualification_type="CE")
    education = {"academics":academic_obj,"certifications":certification_obj}
    return render(request, 'portfolio_app/about.html',education)

def projects(request):
    # 1. Get all projects from DB first
    projects_list = Project.objects.all()
    
    # 2. Sorting (Do this at DB level)
    sort_by = request.GET.get('sort')
    if sort_by == 'oldest':
        projects_list = projects_list.order_by('created_at')
    else:
        projects_list = projects_list.order_by('-created_at')

    # 3. Filtering (Do this in Python to avoid SQLite JSON errors)
    tech_filter = request.GET.get('tech')
    if tech_filter:
        # This checks if the string exists inside the JSON list manually
        projects_list = [p for p in projects_list if p.tech_stack and tech_filter in p.tech_stack]

    # 4. Get unique tech stack items for the dropdown
    unique_techs = set()
    for p in Project.objects.all():
        if p.tech_stack:
            for t in p.tech_stack:
                unique_techs.add(t)
    
    context = {
        'projects': projects_list,
        'unique_techs': sorted(list(unique_techs)),
        'selected_tech': tech_filter,
        'selected_sort': sort_by
    }
    return render(request, "portfolio_app/projects.html", context)


def project_detail(request, pk):
    project_obj = get_object_or_404(Project, pk=pk)
    project = {"project":project_obj}
    

    return render(request, 'portfolio_app/project_detail.html',project)