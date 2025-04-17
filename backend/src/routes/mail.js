const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const {body, validationResult} = require('express-validator');

router.post('/send', [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('lastname').notEmpty().withMessage('El apellido es obligatorio'),
  body('email').isEmail().withMessage('El email es inválido'),
  body('phone').notEmpty().withMessage('El teléfono es obligatorio'),
  body('message').notEmpty().withMessage('El mensaje es obligatorio')
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  const { name, lastname, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Nuevo mensaje de ${name} ${lastname} ${phone}`,
    text: `Correo: ${email}\n\n${message}`
  }

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Correo enviado correctamente' });

  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

module.exports = router;