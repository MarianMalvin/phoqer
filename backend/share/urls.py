from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from upload.views import image_upload

urlpatterns = [
    path("api/upload/", image_upload, name="upload"),
    path("admin/", admin.site.urls),

    # REST-FRAMEWORK URLS
    path('api/v1/categories/', include('categories.urls', namespace='categories')),
    path('api/v1/offers/', include('offers.urls', namespace='offers')),

    # Users
    path('api/v1/users/', include('users.urls', namespace='users')),
    path('api/v1/', include('djoser.urls')),

    # SWAGGER URL
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

    # AUTH
    path('api/v1/auth/', include('djoser.urls.authtoken')),

    # COMMENTS
    path('api/v1/comments/', include('comments.urls', namespace='comments'))
]

if bool(settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
