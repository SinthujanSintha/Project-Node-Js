var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 3000;

var passport = require('passport');
var flash = require('connect-flash');

require('./config/passport')(passport);
app.use(express.static('./public'));
 app.use(express.static('./views'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
   }));

app.use(session({
    secret: 'dkllsdmookmfemfk',
    resave:false,
    saveUninitialized: true
   
   }));


app.set('view engine', 'ejs');



app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./controllers/routes.js')(app, passport);
require('./controllers/routes2.js')(app);


app.listen(port);
console.log("listening on Port: " + port);