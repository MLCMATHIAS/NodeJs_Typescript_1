import express from 'express';
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/ProductController';

const router = express.Router();

//Ruta para obtener todos los productos.
router.get('/products', getAllProducts);

// Ruta para obtener un producto por su ID
router.get('/products/:id', getProduct);

// Ruta para crear un nuevo producto
router.post('/products', createProduct);

// Ruta para actualizar un producto por su ID
router.put('/products/:id', updateProduct);

// Ruta para eliminar un producto por su ID
router.delete('/products/:id', deleteProduct);

export default router;