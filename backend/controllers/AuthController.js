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

        try {
            if(req.body.username && req.body.password){
                chunk.User.findOne({username: req.body.username}, (err, foundUser) => {
                    
                    if(!foundUser.validatePassword(req.body.password)) {
                        res.status(403).json({
                            status: 403,
                            message: 'Invalid password'
                        });
                    }
                    else {
                        
                        let token = jwt.sign({username: req.body.username}, jwtAuth.secret, jwtAuth.config);
    
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
        catch(err) {
            res.status(406).json({
                status: 406,
                message: err
            })
        }


    }

 }