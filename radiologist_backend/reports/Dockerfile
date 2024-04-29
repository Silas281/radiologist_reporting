# Use the official Python image as a base image
FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the entire project directory into the container at /app
COPY . /app/

# Install dependencies
RUN pip install --no-cache-dir -r radiologist_backend/requirements.txt

# Move into the radiologist_backend directory
WORKDIR /app/radiologist_backend

# Copy the database SQL file into the container
COPY database.sql /docker-entrypoint-initdb.d/database.sql

# Run migrations and collect static files
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

# Expose the port that the Django app will run on
EXPOSE 8000

# Define the command to run the Django app when the container starts
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
