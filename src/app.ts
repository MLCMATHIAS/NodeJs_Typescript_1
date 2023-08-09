import express from 'express'; // Importa el framework Express para crear el servidor web.
import mongoose from 'mongoose'; // Importa la biblioteca Mongoose para trabajar con MongoDB.
import * as dotenv from 'dotenv'; // Importa la biblioteca dotenv para cargar las variables de entorno.
import productRoutes from './routes/produtsRoutes'; // Importa las rutas de los productos.

dotenv.config(); // Carga las variables de entorno desde un archivo .env.

const app = express(); // Crea una instancia de la aplicación Express.
const PORT = process.env.PORT || 9000; // Define el puerto en el que se ejecutará el servidor.

// Middleware
app.use(express.json()); // Permite a Express manejar solicitudes JSON.
app.use('/api', productRoutes); // Asocia las rutas de productos a la ruta base "/api".

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI as string) // Conecta a la base de datos MongoDB.
  .then(() => console.log("Connected to MongoDB Atlas")) // Si la conexión es exitosa, muestra un mensaje.
  .catch((error) => console.error(error)); // Si hay un error en la conexión, muestra el error.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Inicia el servidor y muestra el puerto en el que está escuchando.
});
