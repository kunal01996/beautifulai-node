/**
 * ----------------------------------------------------- APPLICATION LOADER -------------------------------------------
 * 
 * The aplication boots up from here, express router is loaded 
 * from here and the port is assigned to the app from over here.
 * 
 * --------------------------------------------------------------------------------------------------------------------
 */

global.__basedir = __dirname;

const {app, language} = require('./config/server');

app.listen(process.env.SERVER_PORT, () => console.log(language.APP_BOOT_MESSAGE));
