from django.http import HttpResponse, JsonResponse
from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView
from rest_framework.views import APIView

from .serializers import CashDaySerializer, ProductCategorySerializer
from .models import CashDay, ProductCategory
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, viewsets, permissions, authentication


class CashDayViewSet(RetrieveUpdateAPIView):

    def get(self, request, *args, **kwargs):
        try:
            cashDay = CashDay.objects.last()
            serializer = CashDaySerializer(cashDay)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class CategoriesViewSet(ListAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer
    permission_classes = [permissions.AllowAny]

# @api_view(['GET', 'POST','PUT'])
# def cashDay(request):
#     if request.method == 'GET':
#         try:
#             cashDay = CashDay.objects.last()
#             serializer = CashDaySerializer(cashDay)
#         except:
#             return Response(status=status.HTTP_204_NO_CONTENT)
#         return Response(serializer.data,status=status.HTTP_200_OK)
#
#     elif request.method == 'POST':
#         try:
#             day = CashDay(open=True)
#             day.save()
#             serializer = CashDaySerializer(day)
#             return JsonResponse(serializer.data, status=201)
#         except:
#             return HttpResponse(status=404)
#
#     elif request.method == 'PUT':
#         try:
#             cashDay = CashDay.objects.last()
#         except:
#             return HttpResponse(status=404)
#
#         try:
#             cashDay.open = False
#             cashDay.save()
#         except:
#             return HttpResponse(status=404)
#
#         serializer = CashDaySerializer(cashDay, many=False)
#         return JsonResponse(serializer.data, status=200)

# @api_view(['GET'])
# def productCategories(request):
#     if request.method == 'GET':
#         try:
#             categories = ProductCategory.objects.all()
#         except:
#             return HttpResponse(status=404)
#
#         serializer = ProductCategorySerializer(categories, many=True)
#         return JsonResponse(serializer.data, status=200)
