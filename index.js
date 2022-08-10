const wakeDyno = require('woke-dyno');
const server = require('./server');
const { port, dynoUrl } = require('./config');

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at port ${port}`);
  wakeDyno({
    url: dynoUrl,
    interval: 60000 * 29,
  }).start();
});
