from django.urls import path

from . import views

app_name = "text_tools"
urlpatterns = [
    path("analyses/", views.AnalysesView.as_view(), name='analyses'),
]
