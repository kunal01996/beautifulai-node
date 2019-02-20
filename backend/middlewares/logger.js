/**
 * This file handles the logging of the requests made to the server.
 */

let fs = require('fs');

exports.logger = (req, res, next) => {

    let now = new Date();
    let logString = `${now}: ${req.method} ${req.url}\n`;
    let logFileName = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}.log`;

    fs.appendFileSync(`${__basedir}/logs/${logFileName}`, logString);

    next();

}
