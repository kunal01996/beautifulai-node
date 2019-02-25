/**
 * JWT Authentication configuration should be added or changed from over here.
 */

exports.jwtAuth = {

    secret: 'beautifulNodeApp',

    config: {

        expiresIn: '24h',
        algorithm: 'RS256' 

    }

}