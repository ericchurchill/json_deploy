const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001
const cors = require (‘cors’)

app.use(cors({
      origin: “https://auction-web-10k5.onrender.com”,
    }))
server.use(middlewares);
server.use(router);
server.use(cors());
server.listen(port);