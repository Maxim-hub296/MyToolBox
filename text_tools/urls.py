from django.urls import path

from . import views

app_name = "text_tools"
urlpatterns = [
    path("analyses/", views.AnalysesView.as_view(), name='analyses'),
    path('register_convertor/', views.RegisterConvertorView.as_view(), name='register_convertor'),
    path('string_strip/', views.StringStripView.as_view(), name='string_strip')

]
