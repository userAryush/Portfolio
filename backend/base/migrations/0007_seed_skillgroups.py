from django.db import migrations

SKILL_GROUPS = [
    {'title': 'Languages', 'order': 0, 'items': ['Python (strong fundamentals)', 'C', 'HTML', 'CSS', 'JavaScript']},
    {'title': 'Backend Frameworks', 'order': 1, 'items': ['Django', 'Django REST Framework (DRF)', 'FastAPI']},
    {'title': 'Databases & ORM', 'order': 2, 'items': ['PostgreSQL', 'MySQL', 'SQLite', 'Django ORM', 'SQLAlchemy (basic)']},
    {'title': 'Frontend', 'order': 3, 'items': ['React (basic)', 'Bootstrap', 'Tailwind CSS']},
    {'title': 'Tools & Practices', 'order': 4, 'items': ['Git', 'Postman (API documentation & testing)', 'Figma', 'Unity', 'Alembic (migrations)', 'Clean & maintainable code']},
    {'title': 'Exploring', 'order': 5, 'items': ['Docker']},
]


def seed_skills(apps, schema_editor):
    SkillGroup = apps.get_model('base', 'SkillGroup')
    for group in SKILL_GROUPS:
        SkillGroup.objects.create(**group)


def remove_skills(apps, schema_editor):
    SkillGroup = apps.get_model('base', 'SkillGroup')
    SkillGroup.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_skillgroup'),
    ]

    operations = [
        migrations.RunPython(seed_skills, remove_skills),
    ]
