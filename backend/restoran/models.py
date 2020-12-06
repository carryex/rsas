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
    category = models.ForeignKey(ProductCategory, on_delete=models.PROTECT,related_name='products')


    def __str__(self):
        return self.name