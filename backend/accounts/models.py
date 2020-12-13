from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="profile")
    discount=models.PositiveIntegerField(
        verbose_name='Скидка',
        default=0,
    )

    def __str__(self):
        return self.user.username