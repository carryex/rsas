from .views import CashDayViewSet, CategoriesViewSet
from django.urls import path

urlpatterns = [
    path("day/",CashDayViewSet.as_view(),name="cash-day"),
    path("categories/",CategoriesViewSet.as_view(),name="products-categories"),
]