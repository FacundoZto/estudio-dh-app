# EstudioDH 

Fullstack landing page for a studio's website. It displays testimonials, captures messages from a contact form, and sends them via email using a Node.js server.
#### Demo: https://estudiodh.onrender.com/

---

## 🧩 Technologies used

### Frontend (`/frontend`)
- React
- Bootstrap 5
- Formik + Yup (form handling and validation)

### Backend (`/backend`)
- Node.js
- Express
- Nodemailer
- dotenv
- cors

---

## 🚀 Project structure

```
EstudioDH/
│
├── backend/          → Express Server (API for sending emails)
│   ├── src/
│   │   ├── routes/
│   │   │   └── mail.js
│   │   └── ...
│   ├── .env          
│   └── server.js
│
└── frontend/        → Frontend application in React
    └── src/
        └── components/
```

---

## 🛠️ How to run the project locally

### 1. Clone the repository

```bash
git clone https://github.com/tu-usuario/EstudioDH.git
cd EstudioDH
```

### 2. Backend

```bash
cd backend
cp .env.example .env   # Create your real .env file
npm install
npm start
```

> 🔐 Make sure to fill in the `.env` file with your email credentials.

### 3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 📩 Environment variables

(`/backend/.env`):

```env
EMAIL_USER=your_email@outlook.com
EMAIL_PASS=your_password
```

> Your account must have app authentication enabled.

---
