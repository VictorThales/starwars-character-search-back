const server = require('./server')

const port = 5000;

server.listen(port,() => console.log(`running on port ${port}`))