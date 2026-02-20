# Personal Assistance — ITI Python Capstone

> A full-stack personal assistant web application built with Python and Flask, developed as the final project for the ITI Full Stack Web Development Using Python course.

![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-Web_Framework-black?style=for-the-badge&logo=flask)
![Status](https://img.shields.io/badge/Status-ITI_Capstone-gold?style=for-the-badge)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)

---

## Overview

This project is the capstone deliverable for the **ITI Full Stack Web Development Using Python** course. It demonstrates the full spectrum of Python web development: Flask routing, Jinja2 templating, static asset management, and modular application structure.

At its core is a **Sierra ILS-inspired Library Management System** — a web-based interface for managing library records. The application extends beyond basic CRUD with productivity tools, a structured API layer, and a test suite, reflecting real-world Flask project conventions.

---

## ✨ Features

| Module                              | Description                                                             |
| ----------------------------------- | ----------------------------------------------------------------------- |
| **Library Management (Sierra ILS)** | Add, search, update, and delete library records via a browser dashboard |
| **Flask Blueprints**                | Modular route organization separating concerns by feature area          |
| **Jinja2 Templates**                | Server-side rendering with reusable template components                 |
| **Static Asset Pipeline**           | Organized `/static` directory for CSS, JS, and media                    |
| **Test Suite**                      | Unit and integration tests in the `/test` directory                     |
| **User Dashboard**                  | Clean web interface for managing records without any desktop GUI        |

---

## 💻 Tech Stack

| Layer            | Technology                             |
| ---------------- | -------------------------------------- |
| **Backend**      | Python 3.x, Flask                      |
| **Templating**   | Jinja2                                 |
| **Frontend**     | HTML5, CSS3, JavaScript                |
| **Architecture** | MVC — Routes, Templates, Static Assets |
| **Testing**      | Python `unittest` / `pytest`           |

---

## 🏗️ Architecture

```
Request → Flask Router (app.py)
              ↓
         Blueprint Handlers
              ↓
         Business Logic / Sierra_ILS.py
              ↓
         Jinja2 Template Rendering (templates/)
              ↓
         HTML Response → Browser
```

### Design Decisions

- **Flask Blueprints** for clean modular route separation
- **Jinja2 inheritance** (`base.html` → page templates) for DRY templates
- **No external ORM** — data managed in-memory or via file I/O for simplicity
- **Test directory** (`/test`) structured for future CI integration

---

## 📁 Project Structure

```
Personal-Assistance-ItI---Python-/
├── app.py                  # Flask application entry point & route definitions
├── Sierra_ILS.py           # Core library management logic (OOP)
├── requirements.txt        # Python dependencies
├── templates/              # Jinja2 HTML templates
│   └── dashboard.html      # Main interface template
├── static/                 # Static frontend assets
│   └── js/                 # JavaScript files
├── test/                   # Test suite directory
└── __pycache__/            # Python bytecode cache (auto-generated)
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.x ([Download](https://www.python.org/downloads/))
- pip (bundled with Python)

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/AhmedTyson/Personal-Assistance-ItI---Python-.git

# 2. Navigate to the project
cd Personal-Assistance-ItI---Python-

# 3. Install dependencies
pip install -r requirements.txt

# 4. Start the Flask development server
python app.py
```

### Access the App

Open your browser and navigate to:

```
http://127.0.0.1:5000
```

### Run Tests

```bash
python -m pytest test/
```
