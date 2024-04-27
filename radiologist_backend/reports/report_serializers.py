from rest_framework import serializers
from .models import Report

class ReportSerializer(serializers.ModelSerializer):
    '''
    Report serializer
    '''
    class Meta:
        model = Report
        fields = ['id', 'title', 'findings', 'report_status', 'impression']
