from .views import CashDayViewSet
# from django.urls import path

# urlpatterns = [
#     path("day/",CashDayViewSet.as_view(),name="cash-day"),
#     path("products/",ProductViewSet.as_view(),name="list-products"),
#     path("categories/",CategoriesViewSet.as_view(),name="products-categories"),
#     # path("category/",ProductByCategoryIdViewSet.as_view(),name="products"),
# ]
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from .views import CategoriesViewSet

category_detail = CategoriesViewSet.as_view({
    'get': 'retrieve'
})

category_list = CategoriesViewSet.as_view({
    'get': 'list'
})

urlpatterns = format_suffix_patterns([
    path('categories/', category_list, name='category-list'),
    path('categories/<int:pk>/', category_detail, name='category-detail'),
    path('day/',CashDayViewSet.as_view(),name="cash-day"),
])
