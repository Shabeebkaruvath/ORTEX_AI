from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class CV(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cvs')
    file_url = models.URLField()  # Or use FileField if storing locally
    parsed_data = models.JSONField(blank=True, null=True)  # Store extracted info like skills, experience, etc.
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'CV of {self.user.username}'
