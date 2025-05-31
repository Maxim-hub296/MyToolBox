from django.urls import path

from . import views

app_name = "random_tools"
urlpatterns = [
    path("rand_num/", views.RandNumView.as_view(), name='rand_num'),
    path("password/", views.PasswordView.as_view(), name='password')
]