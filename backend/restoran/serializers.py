from rest_framework import serializers
from .models import CashDay, ProductCategory

class CashDaySerializer(serializers.ModelSerializer):
  class Meta:
    model = CashDay
    fields = ('open',)

class ProductCategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductCategory
    fields = ('name',)