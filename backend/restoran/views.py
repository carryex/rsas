from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.parsers import JSONParser

from .serializers import CashDaySerializer
from .models import CashDay
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import datetime

@api_view(['GET', 'POST','PUT'])
def current_day(request):
    if request.method == 'GET':
        try:
            cashDay = CashDay.objects.last()
            serializer = CashDaySerializer(cashDay)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.data,status=status.HTTP_200_OK)

    elif request.method == 'POST':
        try:
            day = CashDay(open=True)
            day.save()
            serializer = CashDaySerializer(day)
            return JsonResponse(serializer.data, status=201)
        except:
            return HttpResponse(status=404)

    elif request.method == 'PUT':
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
# @api_view(['GET', 'PUT', 'DELETE'])
# def customers_detail(request, pk):
#     """
#  Retrieve, update or delete a customer by id/pk.
#  """
#     try:
#         customer = Customer.objects.get(pk=pk)
#     except Customer.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#
#     if request.method == 'GET':
#         serializer = CustomerSerializer(customer,context={'request': request})
#         return Response(serializer.data)
#
#     elif request.method == 'PUT':
#         serializer = CustomerSerializer(customer, data=request.data,context={'request': request})
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     elif request.method == 'DELETE':
#         customer.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
