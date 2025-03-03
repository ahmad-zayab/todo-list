To-Do List Full Stack Application
=================================

Overview
--------

This project is a full stack To-Do List application built with a Django REST Framework backend and a React frontend. The application allows users to register, log in, and manage their tasks through a secure RESTful API. Users can add, update, delete, filter, and search tasks. Token-based authentication is used to secure API endpoints.

Features
--------

*   **User Authentication:**
    
    *   User registration and login using token-based authentication.
        
*   **Task Management:**
    
    *   Create, read, update, and delete tasks.
        
    *   Mark tasks as completed.
        
    *   Filter tasks (all or completed).
        
    *   Search tasks by name.
        
*   **Frontend & Backend Integration:**
    
    *   React single-page application communicates with the Django API.
        
    *   Cross-Origin Resource Sharing (CORS) enabled for development.
        

Technology Stack
----------------

*   **Backend:**
    
    *   Django
        
    *   Django REST Framework
        
    *   SQLite (default database)
        
    *   Token Authentication
        
    *   django-cors-headers
        
*   **Frontend:**
    
    *   React (created using Create React App)
        
    *   HTML, CSS, JavaScript
        

Project Structure
-----------------

*   **Django Backend (todo\_backend/):**
    
    *   manage.py – Django command-line utility.
        
    *   todo\_backend/ – Project configuration (settings, URLs, etc.).
        
    *   todo/ – Application containing models, serializers, views, and URLs.
        
*   **React Frontend (e.g., todo-app/):**
    
    *   src/ – Contains React components and application logic.
        
    *   package.json – Lists dependencies and scripts for the React app.
        

Setup Instructions
------------------

### Prerequisites

*   Python 3.x
    
*   Node.js and npm
    
*   Git
    

API Endpoints
-------------

### User Authentication

*   jsonCopyEdit{ "username": "your\_username", "password": "your\_password"}**Response:** Returns user information and a token.
    
*   jsonCopyEdit{ "username": "your\_username", "password": "your\_password"}**Response:** Returns user information and a token.

    
License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
----------------

This project was developed as a learning resource for full stack development using Django and React.
