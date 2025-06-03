from django.shortcuts import render, redirect
from .models import Contact
# Create your views here.


def home(request):
    return render(request, 'portfolio_app/home.html')

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
    return render(request, 'portfolio_app/about.html')

def projects(request):
    return render(request, 'portfolio_app/projects.html')
