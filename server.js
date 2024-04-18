const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.json());

app.post('/post', function (req, res) {
  console.log(req.body);
  res = res.status(200);
  res.send("Kamu Bilang: "+req.body);
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
})