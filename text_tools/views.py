from django.shortcuts import render
from django.views import View
from .func import *
# Create your views here.
class AnalysesView(View):
    def get(self, request):
        return render(request, "text_tools/analyses.html")

    def post(self, request):
        string = request.POST.get('text', '')
        result = string_analyses(string)
        return render(request, 'text_tools/results/result_analyses.html', {"result":result})

class RegisterConvertorView(View):
    def get(self, request):
        return render(request, "text_tools/register_convertor.html")

    def post(self, request):
        string = request.POST.get("text", "")
        choice = request.POST.get("register", "")
        result = convert_register(string, choice)
        return render(request, "text_tools/results/result_convertor.html", {"item": result})