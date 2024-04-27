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

# Create a virtual environment

python -m venv .venv


# mac
python3 -m venv .venv

# Activate the virtual environment:
# Windows
.venv\Scripts\activate

# macOS/Linux
source .venv/bin/activate
```

## 
## Backend Setup
1. Install Python dependencies (in the radiologist_reporting directory):
```
pip install -r requirements.txt
```
2. Navigate to the radiologist_backend directory:
```
cd radiologist_backend
```
3. Start the MySQL database using Docker: Start Docker Desktop: If you are using Docker Desktop for Windows, make sure it is running. You should see the Docker icon in the system tray. If it's not running, start Docker Desktop from the Start menu.
```
cd radiologist_backend/MySQL
docker-compose build
docker-compose up -d
```
4. Run Django migrations to set up the database schema:
```
# make sure in you cd into the radiologist_backend directory

cd radiologist_backend

radiologist_backend > python manage.py migrate
```
5. Start the Django development server:
```
python manage.py runserver
```

## Frontend Setup
1. Navigate to the rrs_frontend directory (in a separate terminal):
```
cd rrs_frontend
```

2. Install npm dependencies:
```
npm install

add --legacy-peer-dep flag if there is dependancy conflicts
```
3. Start frontend app:
```
npm run dev
```

4. Running the Application:

Access the application in your web browser at http://localhost:8000.

Use the navigation to add new reports and manage existing ones.

