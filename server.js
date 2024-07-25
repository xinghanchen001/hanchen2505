const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();

app.use(basicAuth({
  users: { [process.env.BASIC_AUTH_USER]: process.env.BASIC_AUTH_PASS },
  challenge: true,
  unauthorizedResponse: 'Unauthorized'
}));

app.use(express.static(path.join(__dirname, '_site')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});