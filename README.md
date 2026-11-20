# Proyecto final backend

API de productos desarrollada con Node.js, Express y Firebase Firestore. Utiliza JWT para proteger algunas rutas.

## Instalación

1. Instala Node.js.
2. Desde la carpeta `src`, instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `src/.env` con la configuración de Firebase y una clave para JWT:

   ```env
   FIREBASE_API_KEY=tu_api_key
   FIREBASE_AUTH_DOMAIN=tu_auth_domain
   FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   FIREBASE_APP_ID=tu_app_id
   JWT_SECRET_KEY=tu_clave_secreta
   ```

   El `projectId` y el `messagingSenderId` se configuran en `src/data/data.js`.

4. Inicia el servidor desde `src`:

   ```bash
   npm run dev
   ```

La API estará disponible en `http://localhost:3000`.

## Rutas

| Método | Ruta | Descripción | Token |
| --- | --- | --- | --- |
| POST | `/auth/login` | Iniciar sesión con `email` y `password` | No |
| GET | `/api/products` | Listar productos; admite filtros `category` y `price` mínimo | No |
| GET | `/api/products/:id` | Buscar por ID de Firestore | Sí |
| POST | `/api/products/create` | Crear un producto | Sí |
| DELETE | `/api/products/:id` | Eliminar un producto por ID de Firestore | Sí |

Para las rutas protegidas, envía el token obtenido en el login en el encabezado:

```text
Authorization: Bearer <token>
```

Ejemplo de cuerpo para crear un producto:

```json
{
  "nombre": "Producto",
  "categoria": "Electrónica",
  "precio": 100
}
```
