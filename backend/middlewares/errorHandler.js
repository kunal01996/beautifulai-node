/**
 * This is the where all the custom error handllers are written.
 * 
 * Use this file to add your own custom error handlers and then use them all over the application.
 */

 let fs = require('fs');
 let util = require('util');
 let winston = require('../config/winston');

 exports.errorHandlers = {

    /**
     * REST API error handler
     */
    restAPIhandler: (res, err) => {
        res.status(err.code).json({
            status: err.code,
            message: err.message
        });
    },

    /**
     * This will handle all the unhandled errors, it will be coupled with express to handle the errors.
     */
    expressErrorHandler: (err, req, res, next) => {
        winston.error(`${err.status || 500} - ${err.message} - 
            ${req.originalUrl} - ${req.method} - ${req.ip} \n ${err.stack}`);

        res.status(err.status || 500).json({
            status: err.status || 500,
            message: err.message
        });
    }
 }
 