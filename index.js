const jsonServer = require("json-server");
const express = require("express"); // Import express
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

const app = express(); // Create an express app

app.use(cors());

server.use(middlewares);
server.use(router);

app.use(server); // Mount json-server on express app
app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
