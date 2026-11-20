import { getProducts, getProductById, saveProduct, deleteProduct } from "../models/products.models.js"; 

export const getAllProductsService = async (category, price) => {
  const products = await getProducts();
  if (category && price) {
    return products.filter(product => product.categoria === category && product.precio >= parseInt(price));
  }
  if (category) {
    return products.filter(product => product.categoria === category);
  }
  if (price) {
    return products.filter(product => product.precio >= parseInt(price));
  }
  return products;
};

export const getProductByIdService = async (id) => {
  const product = await getProductById(id);
  return product;
};

export const saveProductService = async (product) => {
  const products = await getProducts();
  const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const newProduct = { id: newId, ...product };
  await saveProduct(newProduct);
  return newProduct;
};

export const deleteProductService = async (id) => {
  const deletedId = await deleteProduct(id);
  return deletedId;
};