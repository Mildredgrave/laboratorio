const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API del laboratorio activa');
});

app.get('/api/mensaje', (req, res) => {
  res.json({
    mensaje: '¡Conexión exitosa entre Vercel y Render!',
    curso: 'Despliegue en la nube'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});