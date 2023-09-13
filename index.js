const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// app.post('/login', (req, res) => {
//   const username = req.body.username;
//   console.log('Received username:', username);
//   // Respond with a success message
//   res.status(200).send('Username received successfully.');
// });

// app.post('/login', (req, res) => {
//   const password = req.body.password;
//   console.log('Received password:', password);
//   // Respond with a success message
//   res.status(200).send('Password received successfully.');
// });

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