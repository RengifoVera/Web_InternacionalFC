from django.shortcuts import render,HttpResponse
# Create your views here.

def home(request):
    return render(request,"Web_InternacionalFC/index.html")
def experiencia(request):
    return render(request,"Web_InternacionalFC/experiencia.html")
def index(request):
    return render(request,"Web_InternacionalFC/index.html")
def servicios(request):
    return render(request,"Web_InternacionalFC/servicios.html")
def contacto(request):
    return render(request,"Web_InternacionalFC/contacto.html")