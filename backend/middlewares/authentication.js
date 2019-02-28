/**
 * The Authentication middleware
 */
let jwt = require('jsonwebtoken');
let { jwtAuth } = require(`${__basedir}/config/jwtAuthentication`);
let { Unauthorized } = require('rest-api-errors');
let { restAPIhandler } = require('../middlewares/errorHandler').errorHandlers;

exports.authentication = {

    checkToken: (req, res, next) => {
        try {
            let token = req.headers['x-access-token'] || req.headers['authorization']; // Express converts headers to lowercase

            if(token) {

                if(token.startsWith('Bearer ')) {
                    // Remove Bearer from the string
                    token = token.slice(7, token.length);
                }

                jwt.verify(token, jwtAuth.secret, (err, decoded) => {
                    if (err) new Unauthorized(401, `Unauthorized`);;

                    req.decoded = decoded;
                    next();
                })

            }
            else {
                throw new Unauthorized(401, `Unauthorized`);
            }
        }
        catch(err){
            restAPIhandler(res, err);
        }
    }

}
