require('dotenv').config();
const server = require('./server');
const port = require('./config').port;
server.listen(port, () => {
  console.log('Listening at port ' + port);
});
