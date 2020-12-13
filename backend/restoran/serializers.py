from rest_framework import serializers
from .models import CashDay, ProductCategory, Product


class CashDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = CashDay
        fields = ('open',)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name','price')


class ProductCategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ('id', 'name')

class ProductCategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = ProductCategory
        fields = ('id', 'name', 'products')
