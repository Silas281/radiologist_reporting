@echo off

@REM rem Dockerize the MySQL Database
@REM cd radiologist_backend/MySQL
@REM docker-compose up

@REM rem move back one step
@REM cd ..

rem Install dependencies
pip install -r requirements.txt

rem Run migrations
python manage.py migrate

rem Run the Django app
python manage.py runserver
