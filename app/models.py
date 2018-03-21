from django.db import models
import datetime
# Create your models here.
from django.utils.translation import gettext as _


class Call(models.Model):
	callid=models.AutoField(primary_key=True)
	sentiment=models.CharField(max_length=10)
	keywords=models.CharField(max_length=500)
	service_provider=models.CharField(max_length=100)
	intent=models.CharField(max_length=100)
	rating=models.IntegerField()
	ccid=models.IntegerField()
	text=models.TextField(max_length=1000)
	date = models.DateField(_("Date"), default=datetime.date.today)
	duration = models.IntegerField()
	

class Employee(models.Model):
	eid=models.AutoField(primary_key=True)
	name=models.CharField(max_length=50)
	total_calls=models.IntegerField()
	total_seconds=models.IntegerField()
	#rating=models.IntegerField()
	sentiment=models.CharField(max_length=500)
	#salary=models.IntegerField()
