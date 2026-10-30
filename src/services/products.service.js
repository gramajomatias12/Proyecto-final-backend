const products = [
    { id: 1, nombre: 'Laptop', categoria: 'electronica', precio: 1000 },
    { id: 2, nombre: 'Telefono', categoria: 'electronica', precio: 500 },
    { id: 3, nombre: 'Mesa', categoria: 'muebles', precio: 150 },
    { id: 4, nombre: 'Silla', categoria: 'muebles', precio: 75 },
    { id: 5, nombre: 'Auriculares', categoria: 'electronica', precio: 100 }
]

export const getAllProductsService = () => {
  return products;
};

export const getProductByIdService = async (id) => {
  return products.find(product => product.id == id);
};