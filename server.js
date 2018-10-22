/**
 * All the server configurations including routes go in this file
 */

 // Setting the constant constant
 const constants = require('./config/constants');

 // Setting the app constant
 const app = constants.serverConfig.app;

 /// Setting the fs constant
 const fs = constants.serverConfig.fs

 /**
  * Registering the middleware for the application goes here
  */
 app.use((req, res, next) => {

    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    /**
     * Throwing requests back on the console
     */
    console.log(log);
    fs.appendFileSync('./logs/server.log', log);

    // move the request ahead
    next();

 });

 /**
  * Registering the routes for the entire application goes here
  */

  app.get('/', (req, res) => {

    //res.render('home.hbs');
    res.send("Hello World");

  })


  /**
   * Setting app as a property of module.exports to be used outside server.js
   */
  module.exports.app = app;


 