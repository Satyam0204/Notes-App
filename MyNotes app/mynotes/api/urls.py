import imp
from django.urls import path
from .views import *


urlpatterns = [
    path('', getRoutes, name='getresponse'),
    path('notes/', getNotes, name='notes'),
]