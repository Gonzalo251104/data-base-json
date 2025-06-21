const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const routes = require('./routes.json');
const rewriter = jsonServer.rewriter(routes);

server.use(middlewares);
server.use(rewriter);     // Aplica rutas personalizadas
server.use(router);       // Usa el db.json

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`🚀 JSON Server is running on port ${PORT}`);
});
