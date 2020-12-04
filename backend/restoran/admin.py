from django.contrib import admin
from .models import CashDay  # add this

class CashDayAdmin(admin.ModelAdmin):  # add this
    list_display = ('created_at', 'modified_at', 'open')  # add this

# Register your models here.
admin.site.register(CashDay, CashDayAdmin)  # add this
