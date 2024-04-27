from django.db import models

class Report(models.Model):
    title = models.CharField(max_length=200)
    findings = models.TextField()
    REPORT_STATUS_CHOICES = [
        ('New', 'New'),
        ('Unread', 'Unread'),
        ('Prelim', 'Prelim'),
        ('Final', 'Final'),
    ]
    report_status = models.CharField(max_length=100, choices=REPORT_STATUS_CHOICES)
    impression = models.TextField()

    def __str__(self):
        return self.title
