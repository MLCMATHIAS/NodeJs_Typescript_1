import mongoose from 'mongoose'; // Importa la biblioteca Mongoose para definir esquemas y modelos.

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Define un campo "name" de tipo String que es requerido.
  description: { type: String }, // Define un campo "description" de tipo String (opcional).
  price: { type: Number, required: true }, // Define un campo "price" de tipo Number que es requerido.
});

const Product = mongoose.model('Product', productSchema); // Crea el modelo "Product" usando el esquema definido.

export default Product; // Exporta el modelo "Product" para usarlo en otras partes de la aplicación.

