/**
 * AuthController for generatring authentication token.
 */
let jwt = require('jsonwebtoken');
let { jwtAuth } =  require(`${__basedir}/config/jwtAuthentication`);

 exports.AuthController = {

    /**
     * Is responsible for generating authentication token.
     * 
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} chunk 
     */
    genAuthToken: function (req, res, chunk) {

        if(req.body.username && req.body.password){
            chunk.User.findOne({username: req.body.username}, (err, User) => {
    
                if(!User.validatePassword(req.body.password)) {
                    res.status(403).json({
                        status: err.status,
                        message: err.message
                    });
                }
                else {
                    let token = jwt.sign({username: username}, jwtAuth.secret, jwtAuth.config);

                    res.status(200).json({
                        success: true,
                        message: 'Authentication successful!',
                        token
                    });
                }
    
            });
        }
        else {
            res.status(400).json({
                status: 400,
                message: `User credentials not supplied.`
            });
        }


    }

 }