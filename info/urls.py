from django.urls import path

from . import views

app_name = 'info'
urlpatterns = [
    path("", views.AboutView.as_view(), name='about'),
    path("contact/", views.ContactView.as_view(), name='contact')
]