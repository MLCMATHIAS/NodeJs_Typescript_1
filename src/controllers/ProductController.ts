import { Request, Response } from 'express'; // Importa los tipos Request y Response de Express.
import Product from '../models/Product'; // Importa el modelo de Producto definido previamente.

// Obtener todos los productos.
export const getAllProducts = async (_: Request, res: Response) => {
  try {
    const products = await Product.find(); // Busca todos los productos en la base de datos.
    res.json(products); // Envía la lista de productos como respuesta JSON.
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' }); // Si hay un error, envía un mensaje de error y un código de estado 500.
  }
};

// Obtener un producto por su ID.
export const getProduct = async (req: Request, res: Response) => {
  const productId = req.params.id; // Obtiene el ID del producto desde los parámetros de la URL.

  try {
    const product = await Product.findById(productId); // Busca un producto por su ID en la base de datos.
    if (!product) {
      return res.status(404).json({ message: 'Product not found' }); // Si no se encuentra el producto, envía un mensaje de error y un código de estado 404.
    }
    res.json(product); // Envía el producto encontrado como respuesta JSON.
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product' }); // Si hay un error, envía un mensaje de error y un código de estado 500.
  }
};

// Crear un nuevo producto.
export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price } = req.body; // Obtiene los datos del producto desde el cuerpo de la solicitud.

  try {
    const newProduct = await Product.create({ name, description, price }); // Crea un nuevo producto en la base de datos.
    res.status(201).json(newProduct); // Envía el nuevo producto creado como respuesta JSON con un código de estado 201 (Created).
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' }); // Si hay un error, envía un mensaje de error y un código de estado 500.
  }
};

// Actualizar un producto existente por su ID.
export const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.id; // Obtiene el ID del producto desde los parámetros de la URL.
  const { name, description, price } = req.body; // Obtiene los nuevos datos del producto desde el cuerpo de la solicitud.

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, description, price },
      { new: true } // Devuelve el producto actualizado en la respuesta.
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' }); // Si no se encuentra el producto, envía un mensaje de error y un código de estado 404.
    }

    res.json(updatedProduct); // Envía el producto actualizado como respuesta JSON.
  } catch (error) {
    res.status(500).json({ message: 'Error updating product' }); // Si hay un error, envía un mensaje de error y un código de estado 500.
  }
};

// Eliminar un producto por su ID.
export const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id; // Obtiene el ID del producto desde los parámetros de la URL.

  try {
    const deletedProduct = await Product.findByIdAndRemove(productId); // Encuentra y elimina el producto por su ID.

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' }); // Si no se encuentra el producto, envía un mensaje de error y un código de estado 404.
    }

    res.json({ message: 'Product deleted successfully' }); // Envía un mensaje de éxito como respuesta JSON.
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product' }); // Si hay un error, envía un mensaje de error y un código de estado 500.
  }
};
