const data = require('./db.js');

const jsonServer = require('json-server');
const auth = require('json-server-auth')
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(port);