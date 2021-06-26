const http = require('http')

const todos = [
  {id: 1, title: "learn js"},
  {id: 2, title: "learn React"},
  {id: 3, title: "learn Node"},
]

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.setHeader('Content-Type', 'Application/json')
    res.end(JSON.stringify({todos}))
  }
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`))