from django.contrib import admin
from .models import CashDay, ProductCategory, Product, Order, OrderItem


class CashDayAdmin(admin.ModelAdmin):
    list_display = ('created_at', 'modified_at', 'open')
admin.site.register(CashDay, CashDayAdmin)

class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
admin.site.register(ProductCategory, ProductCategoryAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name','price')
admin.site.register(Product, ProductAdmin)

class OrderAdmin(admin.ModelAdmin):
    list_display = ('totalCost','userProfile')
admin.site.register(Order, OrderAdmin)

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order','name','quantity','totalCost')
admin.site.register(OrderItem, OrderItemAdmin)
