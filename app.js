'use strict';
var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var exphbs     = require('express-handlebars');
var logger     = require('morgan');
var mongoose   = require('mongoose');
var dbConfig   = require('./config/db');

//App init
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.disable('x-powered-by');
app.use(logger('dev'));

app.engine('handlebars', exphbs({
    defaultLayout: 'default.handlebars',
    //extname: '',
    helpers: {
        test() {
            return app.get('title');
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

//Database connection
mongoose.connect(`${dbConfig.URL}:${dbConfig.PORT}/${dbConfig.dbName}`, {useNewUrlParser: true}, function (err) {
    if(err) {
        console.log(err);
        return;
    }
    console.log('successfuly connected to database');
});


//Routes
var home      = require('./routes/home');
var addlink   = require('./routes/addlink');
var addsocial = require('./routes/addsocial');

//Load data
const posts = require('./playground/data').posts;

//Routes
app.use(home);
app.use('/addlink', addlink);
app.use('/addsocial', addsocial)




//Create server
var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});