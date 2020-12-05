from rest_framework import serializers
from .models import CashDay, ProductCategory, Product


class CashDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = CashDay
        fields = ('open',)


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ('id', 'name',)

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name','category')
