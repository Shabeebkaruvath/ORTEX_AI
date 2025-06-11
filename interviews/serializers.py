from rest_framework import serializers
from .models import Interview, Question

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class InterviewSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    user = serializers.StringRelatedField(read_only=True)  # Optional: shows username

    class Meta:
        model = Interview
        fields = '__all__'
