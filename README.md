# Radiologist Reporting System

## Overview

The Radiologist Reporting System is a web application that leverages Django for the backend and React (with Redux) for the frontend. It is designed to allow radiologists to efficiently submit and manage their reports.

## Prerequisites

Ensure you have the following installed:

- Docker
- Python 3.x
- Node.js
- npm or Yarn

## Getting Started

1. **Clone the repository:**
```
   git clone https://github.com/Silas281/radiologist_reporting.git
   cd radiologist_reporting
```
## Create a virtual environment
```
### Windows
python -m venv .venv

### activate it
.venv\Scripts\activate

### macOS/Linux
python3 -m venv .venv
source .venv/bin/activate  
### or source .venv/Scripts/activate

```


## 
## Backend Setup
1. Database is MySQL and setup with Docker (So make sure Docker desktop is up and running before proceeding):

```
cd radiologist_backend/MySQL
docker-compose up
```

###  Wait for about a minute for the database to be fully setup
![alt text](image.png)

2. Django Backend - Open a separate terminal (activate virtual env if not activated)
```
#move to radiologist_reporting (depending on where you are)
cd radiologist_reporting 

# Windows
.venv\Scripts\activate

# macOS/Linux
source .venv/bin/activate
# or source .venv/Scripts/activate
```

### move to radiology_backend
```
cd radiologist_backend
```
### Install dependencies and start backend server
```
pip install -r requirements.txt

#Run makemigrations for reports model
python manage.py makemigrations reports

#Run migrations
python manage.py migrate


#Start the Django Server
python manage.py runserver
```

## Frontend Setup (React App Dockerized)
1. Navigate to the rrs_frontend directory (in a separate terminal):
```
cd rrs_frontend
```

2. Build docker image
```
docker build . -t rrs_frontend

```
3. Run a docker container
```
docker run -p 5173:5173 rrs_frontend
```

4. Using the Application:
    view the app at: http://localhost:5173/

Use the navigation to add new reports and manage existing ones.


App Snippets

## Reports List Page
![Report List](./rrs_frontend/public/reportsList1.png)



## Report Details
![Report Details](./rrs_frontend/public/detail2.png)



## No Report page
![Empty Reports](./rrs_frontend/public/image.png)

## Add new report page
![Add Report Page](./rrs_frontend/public/add-new.png)


## Edit Report
![Update Report](./rrs_frontend/public/update.png)



