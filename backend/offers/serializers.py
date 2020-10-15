from rest_framework import serializers
import datetime

from users.models import User
from .models import Offer, OfferImages


class OfferImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfferImages
        fields = [
            'name',
            'url',
        ]


class OfferListItemSerializer(serializers.ModelSerializer):
    images = OfferImageSerializer(many=True, read_only=True)
    is_favorite = serializers.SerializerMethodField()
    is_promoted = serializers.SerializerMethodField()


    class Meta:
        model = Offer
        fields = [
            'cover_image',
            'currency',
            'description',
            'id',
            'images',
            'is_favorite',
            'is_promoted',
            'per',
            'price',
            'pud_date',
            'title',
            'views',
        ]

    def get_is_favorite(self, offer):
        if user_query_param := self.context['request'].query_params.get('user', None):
            user = User.objects.get(username=user_query_param)
            return offer in user.favourite_offers.all()
        return False

    def get_is_promoted(self, offer):
        if datetime.date.today() > offer.promote_til_date:
            return False
        return True