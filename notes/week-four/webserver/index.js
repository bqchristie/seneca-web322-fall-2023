const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  const route = req.url;

  console.log("Route " + route);

  const routeHandlers = {
    "/": () => {
      return "<h1>Hello world</h1>";
    },
    "/list": () => {
      return "<h1>List</h1>";
    },
    "/detail": () => {
      return "<h1>Detail</h1>";
    },
  };

  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(routeHandlers[route]());
});

const port = 3000;
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
