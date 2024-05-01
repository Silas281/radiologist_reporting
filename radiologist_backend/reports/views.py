from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .models import Report
from .report_serializers import ReportSerializer

def standard_response(success, data=None, message=None, status=status.HTTP_200_OK):
    return Response({
        'success': success,
        'data': data,
        'message': message
    }, status=status)

class ReportListCreateAPIView(APIView):
    """
    API view for retrieving all reports, creating a report, and filtering reports by status.
    """
    def get(self, request):
        status_param = request.query_params.get('report_status', None)
        if status_param:
            reports = Report.objects.filter(report_status=status_param)
        else:
            reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)
        return standard_response(True, data=serializer.data)

    def post(self, request):
        serializer = ReportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return standard_response(True, data=serializer.data, status=status.HTTP_201_CREATED)
        return standard_response(False, data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReportRetrieveUpdateDestroyAPIView(APIView):
    """
    API View for retrieving, updating, and deleting a single report.
    """

    def get_object(self, pk):
        try:
            return Report.objects.get(pk=pk)
        except Report.DoesNotExist:
            raise Http404("Report not found")

    def get(self, request, pk):
        report = self.get_object(pk)
        serializer = ReportSerializer(report)
        return standard_response(True, data=serializer.data)

    def put(self, request, pk):
        report = self.get_object(pk)
        serializer = ReportSerializer(report, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return standard_response(True, data=serializer.data)
        return standard_response(False, data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        report = self.get_object(pk)
        report.delete()
        return standard_response(True, message="Report deleted successfully", status=status.HTTP_204_NO_CONTENT)
