from django.contrib import admin
from .models import CashDay, ProductCategory, Product


class CashDayAdmin(admin.ModelAdmin):
    list_display = ('created_at', 'modified_at', 'open')
admin.site.register(CashDay, CashDayAdmin)

class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
admin.site.register(ProductCategory, ProductCategoryAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name',)
admin.site.register(Product, ProductAdmin)
