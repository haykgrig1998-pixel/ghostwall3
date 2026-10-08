from django.shortcuts import render,redirect
from .models import Home,Story,Menu,Specials,Chefs,Reserve
from django.http import HttpResponse
from django.conf import settings
from django.core.mail import send_mail
# Create your views here.

def index(request):
    h_list = Home.objects.all()
    s_list = Story.objects.all()
    m_list = Menu.objects.all()
    s1_list = Specials.objects.all()
    sh_list = Chefs.objects.all()
    r_list = Reserve.objects.all()
    context = {
        'h_list' : h_list,
        's_list' : s_list,
        'm_list' : m_list,
        's1_list' : s1_list,
        'sh_list' : sh_list,
        'r_list': r_list
    }
    return render(request,'index.html',context)

def reserve(request):
    if request.method == 'POST':
        name = request.POST.get('name','').strip()
        email = request.POST.get('email','').strip()
        date = request.POST.get('date','').strip()
        time = request.POST.get('time','').strip()
        message = request.POST.get('message','').strip()
        guests = request.POST.get('guests','').strip()
        location = request.POST.get('location','').strip()
        
        print(f"FORM DATA: Name={name}, Email={email}, Date={date}, Time={time}, Guests={guests}, Location={location}")
        
        subject = f"New reservation from {name}"
        
        body = (
            f"Name: {name}\n"
            f"Email: {email}\n"
            f"Date: {date}\n"
            f"Time: {time}\n"
            f"Guests: {guests}\n"
            f"Location: {location}\n"
            f"Message:\n{message}"
        )
    
        try:
            send_mail(
                subject,
                body,
                settings.DEFAULT_FROM_EMAIL,
                ["haykgrig1998@gmail.com"],
                fail_silently=False,
            )
            print("EMAIL SENT")

        except Exception as e:
            print("EMAIL ERROR:", e)
            return HttpResponse(f"Email error: {e}")
        
        return redirect('index')
    
    return redirect('index')