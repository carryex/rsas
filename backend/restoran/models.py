from django.db import models

class CashDay(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    open = models.BooleanField(default=True)
