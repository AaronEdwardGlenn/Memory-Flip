require('dotenv').config();
require('./src/utils/connect')();

const app = require('./src/serverApp');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
