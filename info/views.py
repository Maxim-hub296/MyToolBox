from django.views.generic import TemplateView
# Create your views here.
class AboutView(TemplateView):
    template_name = "info/about.html"

class ContactView(TemplateView):
    template_name = 'info/contact.html'

class CoffeeView(TemplateView):
    template_name = "info/coffee.html"

class ThanksView(TemplateView):
    template_name = "info/thanks.html"