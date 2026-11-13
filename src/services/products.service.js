import { getProducts } from "../models/products.models.js"; 

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
  const products = await getProducts();
  return products.find(product => product.id == id);
};

export const saveProduct = async (product) => {
  const products = await getProducts();
  const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const newProduct = { id: newId, ...product };
  products.push(newProduct);
  return newProduct;
};

export const deleteProductService = async (id) => {
  const products = await getProducts();
  const index = products.findIndex(product => product.id == id);
  if (index !== -1) {
    products.splice(index, 1);
    return true;
  }
  return false;
};