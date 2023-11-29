# -Express-dia-1 / ej3 folder only
This is a simple Express.js API for managing a list of products. It supports basic CRUD operations (Create, Read, Update, Delete) for a collection of products.
### Instalation
- Clone the project
- cd to the project folder
- cd to the ej3 folder
- Install dependencies
- Run the server (node index.js)

### Get Products

- **URL:** `/products`
- **Method:** `GET`
- **Description:** Get the list of all products.

### Filter Products

- **URL:** `/products/filter`
- **Method:** `GET`
- **Description:** Filter products based on parameters such as `minPrice`and `maxPrice` (should go together), `id`, `price`, or `name`.

### Add a New Product

- **URL:** `/products`
- **Method:** `POST`
- **Description:** Add a new product to the list. Requires a JSON body with `nombre` and `precio`, id is generated automatically. 

### Update a Product

- **URL:** `/products/id/:id`
- **Method:** `PUT`
- **Description:** Update an existing product by providing its `id`. Requires a JSON body with optional `nombre` and `precio` fields, if any of these is empty while executing PUT, the value of the missing one will remain unchanged.

### Delete a Product

- **URL:** `/products/id/:id`
- **Method:** `DELETE`
- **Description:** Delete an existing product by providing its `id`.
