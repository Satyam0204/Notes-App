import imp
from django.urls import path
from .views import *


urlpatterns = [
    path('', getRoutes, name='getresponse'),
    path('notes/', getNotes, name='notes'),
    path('notes/create', creatNote, name='createNote'),
    path('notes/<str:pk>/update', updateNote, name='updateNote'),
    path('notes/<str:pk>/delete', deleteNote, name='deleteNote'),
    path('notes/<str:pk>/', getNote, name='getnote'),
]