

export const routes = [
  {
    method: "POST",
    path: '/tasks',
    handler: (req, res) => {
      return res.writeHead(201).end('created task');
    }
  },
  {
    method: "GET",
    path: '/tasks',
    handler: (req, res) => {

      return res.end('listed tasks ...');
    }
  },
  {
    method: "PUT",
    path: '/tasks/:id',
    handler: (req, res) => {
      return res.writeHead(204).end('updated task ...');
    }
  },
  {
    method: "DELETE",
    path: '/tasks/:id',
    handler: (req, res) => {
      return res.writeHead(204).end('delete task ...');
    }
  },
  {
    method: "PATCH",
    path: '/tasks/:id/complete',
    handler: (req, res) => {
      return res.end('updated info ...');
    }
  }
]