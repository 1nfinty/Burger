var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}))

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));

app.set('view engine','handlebars');

var PORT = process.env.PORT || 8080;

var mysql = require('mysql');
 
// require('./controllers/routes.js')(app);
var routes = require('./controllers/routes.js');
app.use('/',routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
  