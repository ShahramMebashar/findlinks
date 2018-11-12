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

//View settings
app.engine('hbs', exphbs({
    defaultLayout: 'default.hbs',
    extname: 'hbs',
    helpers: {
        test() {
            return app.get('title');
        }
    }
}));

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, 'views'));

//App middlewares and settings
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.disable('x-powered-by');



//Production settings
if(app.get('env') === 'production') {
    app.set('trust proxy', true);
}

//Database connection
mongoose.connect(`${dbConfig.URL}:${dbConfig.PORT}/${dbConfig.dbName}`, {useNewUrlParser: true}, function (err) {
    if(err) {
        console.log(err);
        return;
    }
    console.log('successfuly connected to database');
});

//Routes
var homeRoute    = require('./routes/home');
var linksRoute   = require('./routes/links');
var socialRoute  = require('./routes/social');
var liveTvRoute  = require('./routes/livetv');
var youtubeRoute = require('./routes/youtube');

//Load data
const posts = require('./playground/data').posts;

//Routes 
app.use(homeRoute);
app.use('/links', linksRoute);
app.use('/social-medias', socialRoute);
app.use('/youtube-channels', youtubeRoute);
app.use('/live-tvs', liveTvRoute);

//Admin panel
var adminHomeRoute = require('./routes/admin/adminHome');

//Admin Routes
app.use('/admin', adminHomeRoute);


//404  not found
app.use(function(req, res) {
    res
    .status(404)
    .render('404');
});


//Development settings
if(app.get('env') === 'development') {
    app.use(logger('dev'));
    //TODO: later add error handler for gracefull shutdown
    //app.use(express.errorHandler());
}

//Create server
var PORT = process.env.PORT || 3000;

if(!module.parent) {
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
}

module.exports = app;