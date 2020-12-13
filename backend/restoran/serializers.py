from rest_framework import serializers
from .models import CashDay, ProductCategory, Product, OrderItem, Order


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

class OrderItemSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=200)
    # price = serializers.DecimalField(max_digits=5, decimal_places=2)
    quantity = serializers.IntegerField()
    totalCost = serializers.DecimalField(max_digits=5, decimal_places=2)

    def create(self, validated_data):
        return OrderItem.objects.create(**validated_data)

class OrderSerializer(serializers.Serializer):
    totalCost = serializers.DecimalField(max_digits=5, decimal_places=2)
    orderItems = OrderItemSerializer(many=True, write_only=True)

    def create(self, validated_data):
        orderItems = validated_data.pop('orderItems',[])
        print(orderItems)
        order = Order.objects.create(**validated_data)
        for orderItem_dict in orderItems:
            orderItem_dict['order'] = order
            print(orderItem_dict)
            OrderItem.objects.create(**orderItem_dict)
        return order