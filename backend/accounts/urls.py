from django.urls import path
from .views import UserProfileListCreateView, UserProfileDetailView

urlpatterns = [
    #gets all user profiles and create a new profile
    path("profiles",UserProfileListCreateView.as_view(),name="all-profiles"),
    #retrieves profile details of the currently logged in user
    path("profile/<int:pk>",UserProfileDetailView.as_view(),name="profile"),
]