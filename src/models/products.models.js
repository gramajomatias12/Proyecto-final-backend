import { db } from '../data/data.js';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

// Método para obtener todos los productos
export async function getProducts() {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach((productDoc) => {
        products.push({ ...productDoc.data(), id: productDoc.id });
    });
    return products;
};

// Método para buscar un producto por su ID
export async function getProductById(id) {
    const productDoc = await getDoc(doc(productsCollection, id));
    if (productDoc.exists()) {
        return { ...productDoc.data(), id: productDoc.id };
    }
    return null;
};

// Método para guardar un producto en Firestore
export async function saveProduct(product) {
    const productDoc = await addDoc(productsCollection, product);
    return { ...product, id: productDoc.id };
};
// Método para eliminar un producto por su ID
export async function deleteProduct(id) {
    await deleteDoc(doc(productsCollection, id));
    return id;
};