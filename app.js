var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var logger = require('morgan');
var mongoose = require('mongoose');
var dbConfig = require('./config/db');

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
if (app.get('env') === 'production') {
    app.set('trust proxy', true);
}

//Use global Promise for mongoose
mongoose.Promise = global.Promise;

//Database connection
mongoose.connect(`${dbConfig.URL}:${dbConfig.PORT}/${dbConfig.dbName}`, {
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('successfuly connected to database');
});

//Routes
var homeRoute = require('./routes/home');
var linksRoute = require('./routes/links');
var socialRoute = require('./routes/social');
var liveTvRoute = require('./routes/livetv');
var youtubeRoute = require('./routes/youtube');

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
app.use(function (req, res) {
    res
        .status(404)
        .render('404');
});

//General Production Error Handler
app.use(function (err, req, res, next) {
  res.status(500).json({
    status: 'Error',
    message: 'Internal or Server Error'
  })
});



//Development settings
if (app.get('env') === 'development') {
    app.use(logger('dev'));

    //General Developemtn Error Handler
    app.use(function (err, req, res, next) {
      console.log(err);
      res.send(err.message);
    });
}

//Create server
var PORT = process.env.PORT || 3000;

if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
}

module.exports = app;
