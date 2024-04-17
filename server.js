var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.text({
  type: function(req) {
    return 'text';
  }
}));

app.post('/post', function (req, res) {
  console.log(req.body);
  res = res.status(200);
  res.send("Kamu Bilang: "+req.body);
});

http.createServer(app).listen(3000);