import { db } from '../data/data.js';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

// Método para obtener todos los productos
export async function getProducts() {
    try{
        const querySnapshot = await getDocs(productsCollection);
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (error) {
        console.error('Error getting products:', error);
        return [];
    }
};

// Método para buscar un producto por su ID
export async function getProductById(id) {
    try{
        const productDoc = await getDoc(doc(productsCollection, id));
        if (productDoc.exists()) {
            return productDoc.data();
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting product by ID:', error);
        return null;
    }
};

// Método para guardar un producto en Firestore
export async function saveProduct(product) {
    try{
        await addDoc(productsCollection, product);
    } catch (error) {
        console.error('Error saving product:', error);
    }
};
// Método para eliminar un producto por su ID
export async function deleteProduct(id) {
    try{
        await deleteDoc(doc(productsCollection, id));
        return id;
    } catch (error) {
        console.error('Error deleting product:', error);
        return null;
    }
};