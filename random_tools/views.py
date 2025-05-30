from django.views.generic import TemplateView
# Create your views here.


class RandNumView(TemplateView):
    template_name = "random_tools/rand_num.html"