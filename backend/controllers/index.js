/**
 * After adding all your controllers in the controllers folder, do remember to add them over here, otherwise they would
 * not be loaded by the system.
 */

exports.controllers = {

    // add your controllers over here
    UserController : require('./UserController').UserController,
    AuthController: require('./AuthController').AuthController
    
}
