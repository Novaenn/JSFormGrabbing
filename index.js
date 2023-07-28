const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000; // You can change this port number if needed

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/password', (req, res) => {
  const password = req.body.password;
  console.log('Received password:', password);
  // You can do further processing with the password here

  // Respond with a success message
  res.status(200).send('Password received successfully.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});