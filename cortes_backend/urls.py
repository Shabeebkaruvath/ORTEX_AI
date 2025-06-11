 
from django.contrib import admin
from django.urls import path,include
from django.http import HttpResponse

def home(request):
    return HttpResponse("""
        <html>
            <head><title>Welcome</title></head>
            <body style="font-family:Arial;text-align:center;padding:40px;">
                <h1>Welcome to ORTES AI</h1>
                
            </body>
        </html>
    """)



urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/', include('interviews.urls')),
]
