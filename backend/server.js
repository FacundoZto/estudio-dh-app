const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mailRoutes = require('./src/routes/mail');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', mailRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});