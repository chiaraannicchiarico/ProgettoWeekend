
// prova di Express che avvia un server e ascolta sulla porta 8081 per la connessione.
/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

*/



var express = require('express');
var app = express();


app.use(express.static('dist'));

var data = require('./data')

app.get('/articoli', function (req, res) {
  res.send(JSON.stringify(data));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


