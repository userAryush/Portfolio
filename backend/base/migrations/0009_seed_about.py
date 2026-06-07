from django.db import migrations

DESCRIPTION = (
    "Recent BCS graduate with a strong focus on backend development and building reliable, "
    "scalable systems. Experienced in Django, Django REST Framework, and FastAPI — from designing "
    "clean RESTful APIs to structuring maintainable codebases. I care deeply about system design, "
    "writing well-tested code, and ensuring solid QA coverage across the stack. Outside of backend "
    "work, I enjoy exploring how thoughtful architecture decisions can make or break a product at "
    "scale, and I'm always looking to sharpen my skills and take on meaningful engineering challenges."
)


def seed_about(apps, schema_editor):
    AboutSection = apps.get_model('base', 'AboutSection')
    AboutSection.objects.create(description=DESCRIPTION)


def remove_about(apps, schema_editor):
    AboutSection = apps.get_model('base', 'AboutSection')
    AboutSection.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_aboutsection'),
    ]

    operations = [
        migrations.RunPython(seed_about, remove_about),
    ]
