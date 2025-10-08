// server.js

// 1. Importar las librerías necesarias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importar las rutas de autenticación
const authRoutes = require('./routes/auth');

// 2. Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 5000; // Usar un puerto para el servidor

// 3. Middlewares
app.use(cors()); // Permite la comunicación entre el frontend y el backend
app.use(express.json()); // Permite que el servidor entienda peticiones con cuerpo en formato JSON

// 4. Conexión a la base de datos de MongoDB Atlas
const MONGO_URI = ''; // <-- PEGA TU CADENA DE CONEXIÓN AQUÍ

mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));

// 5. Rutas de la API
app.use('/api/auth', authRoutes); // Todas las rutas en auth.js empezarán con /api/auth

// 6. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});