from . import views
from django.conf.urls import url

urlpatterns = [
    url('', views.current_day),
]