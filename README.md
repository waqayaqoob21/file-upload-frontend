# File Upload Frontend

🚀 Complete Installation Guide

Follow these steps to set up and run the project from zero on any Windows machine.

🟦 1. Install Git (Required)

If Git is not installed:

Go to: https://git-scm.com/downloads

Download Windows Installer

Install it with default settings

Verify installation:
    git --version


2. Install Node.js (Required to run React)

Open https://nodejs.org

Download the LTS version

Install with default settings

Verify installation:
    node -v
    npm -v

3. Clone the React Project (Your Friend Must Do This)

Open PowerShell or Command Prompt and run:
    git clone https://github.com/waqayaqoob21/file-upload-frontend.git


Move into the folder:
    cd file-upload-frontend


4. Install All Required Packages

Inside the project folder:
    
    npm install

This installs:

    React

    Vite

    Axios

    All dependencies needed to run the app

5. Run the Project (Start React Server)
    npm run dev

You will see:
    Local: http://localhost:5173/

Open that URL in your browser — the React app will load.



## ✨ Features

- 📁 Upload **PDF** or **image** files
- ✅ Frontend validation (only allowed file types)
- 🔗 Sends file to a **Django API** as `multipart/form-data`
- 🧱 Clean structure with a separate **API service layer** (`src/api/fileService.js`)
- 🎨 Simple, responsive UI using React inline styles
- 🔧 Built with **Vite** for fast development

---

## 🧱 Tech Stack

**Frontend**

- React (with hooks)
- Vite
- Axios

**Backend (expected)**

- Django / Django REST Framework
- Endpoint: `POST /api/upload/`
- Accepts file in the field named `file`

> 🔔 Note: This repository only contains the **frontend**.  
> Your Django backend should run separately (e.g. at `http://localhost:8000`).

---

## 📂 Project Structure

```bash
file-upload-frontend/
├─ public/
├─ src/
│  ├─ api/
│  │  └─ fileService.js      # Axios service for file upload API
│  ├─ App.jsx                # Main UI (file upload form)
│  ├─ main.jsx               # React entry point
│  └─ index.css              # Global styles
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
