# Generated by Django 3.1.2 on 2020-12-11 00:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0002_childcategories_test_field'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='childcategories',
            name='test_field',
        ),
    ]
