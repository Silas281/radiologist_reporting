@echo off

rem Dockerize the MySQL Database
cd radiologist_backend/MySQL
docker-compose up -d

rem move back one step
cd ..

rem Install dependencies
pip install -r requirements.txt

rem Run migrations
python manage.py migrate

rem Run the Django app
python manage.py runserver
