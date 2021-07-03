const http = require("http");

const todos = [
  { id: 1, title: "learn js" },
  { id: 2, title: "learn React" },
  { id: 3, title: "learn Node" },
];

//  https://us-east1-serverless-306422.cloudfunctions.net/spellchecker/
//  for checking word spelling

const server = http.createServer((req, res) => {
  let body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = JSON.parse(Buffer.concat(body).toString());

      res.setHeader("Content-Type", "application/json");
      res.statusCode = 404;
      const resp = {
        success: false,
        data: null,
        error: null,
      };
      const { method, url } = req;

      if (url === "/todos") {
        if (method === "POST") {
          const { id, title } = body;
          if (!id || !title) {
            resp.error = "id and title fields are required";
          } else {
            todos.push({ id, title });
            res.statusCode = 201;
            resp.success = true;
            resp.data = todos;
          }
        }
        if (method === "GET") {
          resp.data = todos;
          resp.success = true;
          res.statusCode = 200;
        }
      }

      res.end(JSON.stringify(resp));
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
