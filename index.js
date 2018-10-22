/**
 * index.js - the starting point of the project
 * 
 * All the server configurations go in this file
 */

 const serve = require('./server');     
 const constants = require('./config/constants');

 const PORT = constants.serverConfig.PORT;

 serve.app.listen(PORT, () => {

    console.log(`Listening to ${PORT}`);

 })