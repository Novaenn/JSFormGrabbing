const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!req.body.password) {
    console.log('Received username:', username);
  };
  if (!req.body.username) {
    console.log('Received password:', password);
  };
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});