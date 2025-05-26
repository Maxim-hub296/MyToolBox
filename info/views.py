from django.views.generic import TemplateView
# Create your views here.
class AboutView(TemplateView):
    template_name = "info/about.html"

class ContactView(TemplateView):
    template_name = 'info/contact.html'