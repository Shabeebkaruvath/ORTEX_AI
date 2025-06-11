from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InterviewViewSet, QuestionViewSet

router = DefaultRouter()
router.register(r'interviews', InterviewViewSet)
router.register(r'questions', QuestionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
