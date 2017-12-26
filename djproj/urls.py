from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^_/', admin.site.urls),
]
