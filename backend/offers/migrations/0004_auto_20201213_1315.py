# Generated by Django 3.1.2 on 2020-12-13 13:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('offers', '0003_auto_20201211_0039'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='offer',
            options={'ordering': ['pub_date']},
        ),
        migrations.RenameField(
            model_name='offer',
            old_name='pud_date',
            new_name='pub_date',
        ),
    ]
