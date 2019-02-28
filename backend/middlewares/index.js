/**
 * After adding all your middlewares in the middlewares folder, do remember to add them over here, otherwise they would
 * not be loaded by the system.
 */

exports.middlewares = {

    // add your middlewares
    logger: require('./logger').logger,
    authentication: require('./authentication').authentication,
    errorHandlers: require('./errorHandler').errorHandlers 
    
}
