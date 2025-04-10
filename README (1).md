# EstudioDH 

Proyecto completo con frontend y backend para el sitio web de un estudio. Permite mostrar testimonios, capturar mensajes desde un formulario de contacto y enviarlos por correo electrónico usando un servidor Node.js.

---

## 🧩 Tecnologías utilizadas

### Frontend (`/frontend`)
- React
- Bootstrap 5
- Formik + Yup (manejo y validación de formularios)

### Backend (`/backend`)
- Node.js
- Express
- Nodemailer
- dotenv
- cors

---

## 🚀 Estructura del proyecto

```
EstudioDH/
│
├── backend/          → Servidor Express (API para envío de mails)
│   ├── src/
│   │   ├── routes/
│   │   │   └── mail.js
│   │   └── ...
│   ├── .env          
│   └── server.js
│
└── frontend/        → Aplicación frontend en React
    └── src/
        └── components/
```

---

## 🛠️ Cómo correr el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/EstudioDH.git
cd EstudioDH
```

### 2. Backend

```bash
cd backend
cp .env.example .env   # Crear tu archivo .env real
npm install
npm start
```

> 🔐 Asegurate de completar el archivo `.env` con tus credenciales de correo.

### 3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 📩 Variables de entorno

En el backend (`/backend/.env`):

```env
EMAIL_USER=tu_email@outlook.com
EMAIL_PASS=tu_contraseña_de_aplicación
```

> Tu cuenta debe tener habilitada la autenticación de aplicaciones.

---
