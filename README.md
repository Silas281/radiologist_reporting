# Radiologist Reporting System

## Overview
The Radiologist Reporting System is a web application built with Django for the backend and React for the frontend. It allows radiologists to submit reports and manage them efficiently.

## Prerequisites
Make sure you have the following installed:

- Docker
- Python 3.x
- Node.js
- npm or Yarn

```
git clone https://github.com/Silas281/radiologist_reporting.git
cd radiologist_reporting

# Create a virtual environment (optional but recommended)
python3 -m venv .venv

# Activate the virtual environment:
# Windows
myenv\Scripts\activate

# macOS/Linux
source myenv/bin/activate
```

## 
## Backend Setup
1. Navigate to the radiologist_backend directory:
```
cd radiologist_backend
```
2. Install Python dependencies:
```
pip install -r requirements.txt
```
3. Start the MySQL database using Docker:
```
cd radiologist_backend/MySQL
docker-compose up -d
```
4. Run Django migrations to set up the database schema:
```
# make sure in you cd into the radiologist_backend directory
python manage.py migrate
```
5. Start the Django development server:
```
python manage.py runserver
```

## Frontend Setup
1. Navigate to the rrs_frontend directory:
```
cd rrs_frontend
```

2. Install npm dependencies:
```
npm install
```
3. Start frontend app:
```
npm run dev
```

4. Running the Application:

Access the application in your web browser at http://localhost:8000.

Use the navigation to add new reports and manage existing ones.

