/**
 * This is the where all the custom error handllers are written.
 * 
 * Use this file to add your own custom error handlers and then use them all over the application.
 */

 let fs = require('fs');
 let util = require('util');

 exports.errorHandlers = {

    /**
     * REST API error handler
     */
    restAPIhandler: (res, err) => {
        res.status(err.code).json({
            status: err.code,
            message: err.message
        });
    }
 }
 