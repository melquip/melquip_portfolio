const server = require('./server');
const { port } = require('./config');

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at port ${port}`);
});
