from django.shortcuts import render
from django.views import View
from .func import string_analyses
# Create your views here.
class AnalysesView(View):
    def get(self, request):
        return render(request, "text_tools/analyses.html")

    def post(self, request):
        string = request.POST.get('text', '')
        result = string_analyses(string)
        return render(request, 'text_tools/results/result_analyses.html', {"result":result})
