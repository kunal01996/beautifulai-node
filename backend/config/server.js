/**
 * ----------------------------------------Centeral server configurations------------------------------------
 * 
 * All the configurations for the appp go inside this file. This file includes configuration 
 * for the following elments in the application:
 * 
 * 1. All the controllers
 * 2. All the routes are configured in this file itself
 * 3. All the middlewares
 * 
 * This file also includes certain middlewares which will run on every request that is made by the app.
 * 
 * Any check for any kind of configuration should be done over here.
 * ----------------------------------------------------------------------------------------------------------
 */

 let { serverConfig } = require('./constants');
 let { middlewares } = require(`${__basedir}/middlewares`);
 let { controllers } = require(`${__basedir}/controllers`);
 let { models } = require(`${__basedir}/models`);
 let { helpers } = require(`${__basedir}/helpers`);
 let language  = require(`${__basedir}/lang`).language[process.env.APP_LANG];
 let mongoose = require('./mongoose').mongoose;
 let morgan = require('morgan');
 let winston = require('./winston');

 let bodyParser = require('body-parser');

 // Defining all the generic middlewares (that would run on every request made).
 serverConfig.app.use(bodyParser.json());
 serverConfig.app.use(bodyParser.urlencoded({extended:true}));
 serverConfig.app.use(morgan('combined', {stream: winston.stream}));

 // error handler
 serverConfig.app.use((err, req, res, next) => {
     middlewares.errorHandlers.expressErrorHandler(err, req, res, next);
 })

 serverConfig.app.use((req, res, next) => {
    middlewares.logger(req, res, next);
 });

 // Defining all routes to controllers over here
 serverConfig.app.get('/', middlewares.authentication.checkToken, (req, res) => {

    res.json({
        message: `Welcome to the app`
    });

 });

 serverConfig.app.post('/user', (req, res) => {
     let User = models.User;
     controllers.UserController.createUser(req, res, {User, helpers, language});
 });

 serverConfig.app.post('/authenticate', (req, res) => {
    let User = models.User;
    controllers.AuthController.genAuthToken(req, res, {User, helpers, language});
 });

 module.exports = {
     app: serverConfig.app,
     language: language
 }

