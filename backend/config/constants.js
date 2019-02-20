/**
 * -------------------------------------- Declare all the app contants over here -------------------------------
 * 
 * This file has require statements for the following resources:
 * 1. express app
 * 2. dotenv
 * 
 * This file will load all your dependencies and use this file to import your respective resources.
 * -------------------------------------------------------------------------------------------------------------
 */

 const express = require('express');
 
 // Configuring dotenv
 require('dotenv').config();

 /// make sure to not override these elements anywhere else in the application.
 exports.serverConfig = {
     express,
     app: express()
 }
 