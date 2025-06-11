from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class AdminProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='admin_profile')
    access_level = models.CharField(max_length=50, default='moderator')   
    dashboard_prefs = models.JSONField(blank=True, null=True)   
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Admin: {self.user.username}'
