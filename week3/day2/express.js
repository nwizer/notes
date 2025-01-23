const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body); 
  res.send(res.body);
});

app.listen(3000, () => console.log('Server running on port 3000'));

