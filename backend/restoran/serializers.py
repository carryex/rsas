from rest_framework import serializers
from .models import CashDay

class CashDaySerializer(serializers.ModelSerializer):
  class Meta:
    model = CashDay
    fields = ('open',)