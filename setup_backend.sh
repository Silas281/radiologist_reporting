#!/bin/bash

# Dockerize the MySQL Database
cd radiologist_backend/MySQL
docker-compose up --build -d

#move one step back
cd ..

# Install dependencies
pip install -r requirements.txt


# Run migrations
python manage.py migrate

# Run the Django app
python manage.py runserver
