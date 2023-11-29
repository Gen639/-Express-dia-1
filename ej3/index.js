const express = require("express");
const app = express();

const PORT = 3000;

const productos = {
  description: "Productos",
  items: [
    { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
    { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
    { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
    { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
    { id: 5, nombre: "Skin Valorant", precio: 120 },
    { id: 6, nombre: "Taza de Star Wars", precio: 220 },
  ],
};
const productsItems = productos.items;

app.use(express.json());

app.get("/products", (req, res) => {
  res.status(202).send(productos);
});

app.get("/products/filter", (req, res) => {
  const { minPrice, maxPrice, id, price, name } = req.query;

  if (id) {
    const found = productsItems.some((item) => item.id == id);
    if (found) {
      res.status(202).send(productsItems[id - 1]);
    } else {
      res.status(404).send("El item no está encontrado");
    }
  } else if (price) {
    const filteredItems = productsItems.filter((item) => item.precio == price);
    res.status(202).send(filteredItems);
  } else if (minPrice && maxPrice) {
    const filteredItems = productsItems.filter(
      (item) => item.precio >= minPrice && item.precio <= maxPrice
    );
    res.status(202).send(filteredItems);
  } else if (name) {
    const filteredItems = productsItems.filter((item) => item.nombre === name);
    if (filteredItems.length > 0) {
      res.status(202).send(filteredItems);
    } else {
      res.status(404).send("El item no está encontrado");
    }
  } else {
    res.status(400).send("Parámetros no válidos");
  }
});

app.post("/products", (req, res) => {
  const { nombre, precio } = req.body;
  const newProduct = {
    id: productsItems.length + 1,
    nombre,
    precio,
  };
  if (!nombre || !precio) {
    res.status(400).send("Hay que rellenar todos campos");
  }
  productos.items.push(newProduct);
  res.send({ message: "todo ok", productsItems });
});

app.put("/products/id/:id", (req, res) => {
  const id = req.params.id;
  const found = productsItems.some((item) => item.id === +id);

  if (found) {
    productsItems.forEach((item) => {
      if (item.id === +id) {
        item.nombre = req.body.nombre || item.nombre;
        item.precio = req.body.precio || item.precio;
        res.status(200).send(productos);
      }
    });
  } else {
    res.status(400).send("el item no está encontrado");
  }
});

app.delete("/products/id/:id", (req, res) => {
  const id = req.params.id;
  const found = productsItems.some((item) => item.id === +id);
  if (found) {
    const deleteItem = productsItems.filter((member) => member.id !== +id);
    res.status(202).send(deleteItem);
  } else {
    res.status(400).send("el item no está encontrado");
  }
});

app.listen(PORT, () => {
  console.log(`server strated on port ${PORT}`);
});
