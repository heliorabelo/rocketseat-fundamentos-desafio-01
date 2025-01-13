import http from 'node:http';
import { routes } from './routes.js';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  const route = routes.find(route => {
    console.log(route.method == method && route.path == url)
    return route.method == method && route.path == url
  })

  if (route) {

    return route.handler(req, res)
  }

  return res.end('padrão');
})

server.listen(3333);