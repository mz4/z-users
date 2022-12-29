const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({ static: './build' });

server.db = router.db;

server.use(auth);
server.use(middlewares);
server.use(router);
server.listen(3001);

module.exports = server;
