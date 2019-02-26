/**
 * UserController, define all the functions pertaining to the user over here.
 */
let apiErrors = require('rest-api-errors'); 

exports.UserController = {

    /**
     * Is responsible for creating a user in the DB.
     * 
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} Chunk 
     * 
     * @return mixed
     */
    createUser: function(req, res, Chunk)  {

        try {
            
            if(!req.body.name || !req.body.username || !req.body.email || !req.body.password){
                throw new apiErrors.NotAcceptable(406, Chunk.language.REST_API_ERRORS[406]);
            }

            let newUser = new Chunk.User({
                user_type: 1,
                name: req.body.name,
                username: req.body.username,
                email: req.body.email
            });

            newUser.password = newUser.generateHash(req.body.password);
            newUser.save();

            res.json({
                'status': 200,
                'message': {newUser}
            });

        }
        catch (e) {
            
            res.status(406).json({
                'status': 406,
                'message': e.message || err
            });

        }

    }

}