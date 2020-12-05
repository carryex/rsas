from .views import CashDayViewSet, CategoriesViewSet, ProductViewSet
from django.urls import path

urlpatterns = [
    path("day/",CashDayViewSet.as_view(),name="cash-day"),
    path("products/",ProductViewSet.as_view(),name="list-products"),
    path("categories/",CategoriesViewSet.as_view(),name="products-categories"),
]