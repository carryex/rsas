from django.http import HttpResponse, JsonResponse
from rest_framework.generics import RetrieveUpdateAPIView, ListCreateAPIView
from rest_framework.viewsets import ReadOnlyModelViewSet
from .serializers import CashDaySerializer, ProductCategorySerializer, ProductCategoryListSerializer, \
    OrderSerializer
from .models import CashDay, ProductCategory, Order
from rest_framework.response import Response
from rest_framework import status, permissions
from accounts.models import UserProfile

class CashDayViewSet(RetrieveUpdateAPIView):
    def get(self, request, *args, **kwargs):
        try:
            cashDay = CashDay.objects.last()
            serializer = CashDaySerializer(cashDay)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        try:
            cashDay = CashDay.objects.last()
        except:
            return HttpResponse(status=404)
        try:
            cashDay.open = False
            cashDay.save()
        except:
            return HttpResponse(status=404)

        serializer = CashDaySerializer(cashDay, many=False)
        return JsonResponse(serializer.data, status=200)

    def post(self, request, *args, **kwargs):
        try:
            cashDay = CashDay(open=True)
            cashDay.save()
            serializer = CashDaySerializer(cashDay)
            return JsonResponse(serializer.data, status=201)
        except:
            return HttpResponse(status=404)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class CategoriesViewSet(ReadOnlyModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = ProductCategoryListSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = ProductCategoryListSerializer(queryset, many=True)
        return Response(serializer.data)


class OrderViewSet(ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            order = serializer.save()
            if (request.data['userProfile']):
                try:
                    # user = UserProfile.objects.find(pk=request.data['userProfile'])
                    user = UserProfile.objects.last()
                    order.userProfile = user
                    order.save()
                except:
                    return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
