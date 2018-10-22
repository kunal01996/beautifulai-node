/**
 * All the constants go in this file
 */

 // Native constants go here
 const fs = require('fs');

 // Third party module constants
 const express = require('express');
 const hbs = require('handlebars');
 
 // Setting up to access .env file values
 require('dotenv').config();

 // Custom constants
 const PORT = process.env.PORT || process.env.APP_PORT;

 module.exports.serverConfig = {

    /**
     * Setting fs module to be used outside constants.js
     */
    fs : fs,

    /**
     * Setting express to be used outside constants.js
     */
    app : express(),

    /**
     * Setting HBS (Handlebars) to be used outside constants.js
     */
    hbs : hbs,

    /**
     * Setting PORT = 4000 (will change to get the same from a .env file)
     */
    PORT: PORT

 }