#!/bin/sh
if [ "${RUN_MIGRATIONS:-true}" = "true" ]; then
  python manage.py migrate --noinput
fi
python manage.py collectstatic --noinput
exec gunicorn portfolio.wsgi:application --bind 0.0.0.0:8000 --workers 2
