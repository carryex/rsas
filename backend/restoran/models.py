from django.db import models

class CashDay(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    open = models.BooleanField(default=True)

class ProductCategory(models.Model):
    name = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    price = models.DecimalField(verbose_name='price',max_digits=5, decimal_places=2, default=0.00)
    category = models.ForeignKey(ProductCategory, on_delete=models.PROTECT,related_name='products')

    def __str__(self):
        return self.name
class Order(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    totalCost = models.DecimalField(verbose_name='totalCost', max_digits=5, decimal_places=2, default=0.00)

class OrderItem(models.Model):
    order = models.ForeignKey(
        Order,
        verbose_name='Заказ',
        on_delete=models.PROTECT,
    )
    name = models.CharField(max_length=10,default='')
    totalCost = models.DecimalField(verbose_name='totalCost', max_digits=5, decimal_places=2, default=0.00)
    quantity = models.PositiveIntegerField(
        verbose_name='Колличество',
        default=0,
    )

