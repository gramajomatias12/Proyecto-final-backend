import { getAllProductsService, getProductByIdService, saveProductService, deleteProductService } from "../services/products.service.js";

export const getAllProducts = async (req, res) => {

  const category = req.query.category;
  const price = req.query.price;

  try {
    const products = await getAllProductsService()
    const filteredProducts = products.filter(p => {
      return (!category || p.categoria === category) && (!price || p.precio >= parseInt(price));
    });
    res.status(200).json({
      message: "Productos filtrados correctamente",
      data: filteredProducts
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error: error.message });
  }
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      const product = await getProductByIdService(id)
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el producto', error: error.message });
    }
  }
  else {
    res.status(400).json({ message: 'ID del producto no proporcionado' });
  }
};

export const createProduct = async (req, res) => {
  const { nombre, categoria, precio } = req.body;
  if (!nombre || !categoria || !precio) {
    return res.status(400).json({ message: 'Faltan datos del producto' });
  }
  try {
    const newProduct = { nombre, categoria, precio: parseInt(precio) };
    await saveProductService(newProduct);
    res.status(201).json({ message: 'Producto creado correctamente', data: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: 'ID del producto no proporcionado' });
  }
  try {
    const product = await getProductByIdService(id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    await deleteProductService(id);
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
  }
};