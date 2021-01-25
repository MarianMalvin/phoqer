import datetime

from rest_framework import serializers
from django.core.exceptions import ObjectDoesNotExist

from users.models import User

from .models import Offer, OfferImages


class OfferImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfferImages
        fields = [
            'id',
            'url',
        ]
        extra_kwargs = {
            'id': {
                'read_only': False,
                'required': False,
            }
        }


class BaseOfferSerializer(serializers.ModelSerializer):
    images = OfferImageSerializer(many=True, source='offer_images', required=False)
    is_favorite = serializers.SerializerMethodField()
    is_promoted = serializers.SerializerMethodField()

    def get_is_favorite(self, offer):
        user_request = self.context['request'].user
        if user_request:
            try:
                user_request.favorite_offers.get(id=offer.id)
                return True
            except ObjectDoesNotExist:
                return False
        return False

    def get_is_promoted(self, offer):
        if offer.promote_til_date and datetime.date.today() < offer.promote_til_date:
            return True
        return False


class OfferListItemSerializer(BaseOfferSerializer):
    class Meta:
        model = Offer
        fields = [
            'cover_image',
            'currency',
            'description',
            'id',
            'images',
            'is_deliverable',
            'is_favorite',
            'is_promoted',
            'price',
            'pub_date',
            'title',
            'views',
        ]


class OfferSerializer(BaseOfferSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Offer
        fields = [
            'author',
            'category',
            'city',
            'cover_image',
            'currency',
            'deposit_val',
            'description',
            'description',
            'doc_needed',
            'extra_requirements',
            'id',
            'images',
            'is_deliverable',
            'is_favorite',
            'is_promoted',
            'max_rent_period',
            'min_rent_period',
            'price',
            'pub_date',
            'sub_category',
            'title',
            'views',
        ]
        extra_kwargs = {
            'category': {'required': False},
            'city': {'required': False},
            'cover_image': {'required': False},
            'currency': {'required': False},
            'deposit_val': {'required': False},
            'description': {'required': False},
            'doc_needed': {'required': False},
            'extra_requirements': {'required': False},
            'images': {'required': False},
            'is_deliverable': {'required': False},
            'is_favorite': {'required': False, 'read_only': True},
            'is_promoted': {'required': False, 'read_only': True},
            'max_rent_period': {'required': False},
            'min_rent_period': {'required': False},
            'price': {'required': False},
            'pub_date': {'required': False, 'read_only': True},
            'sub_category': {'required': False},
            'title': {'required': False},
            'views': {'required': False, 'read_only': True},
        }

    def create(self, validated_data):
        try:
            images = validated_data.pop('offer_images')
        except KeyError:
            images = None
        offer_obj = Offer.objects.create(**validated_data)
        if images:
            OfferImages.objects.bulk_create(
                [OfferImages(offer=offer_obj, **image) for image in images]
            )
        return offer_obj

    def update(self, instance, validated_data):
        offer_obj = super(OfferSerializer, self).update(instance, validated_data)
        images = validated_data.get('offer_images')
        if images:
            for image in images:
                if image_id := image.get('id'):
                    image_obj = OfferImages.objects.get(id=image_id)
                    image_obj.name = image.get('name', image_obj.name)
                    image_obj.url = image.get('url', image_obj.url)
                    image_obj.save()
                else:
                    OfferImages.objects.create(offer=offer_obj, **image)
        return offer_obj
