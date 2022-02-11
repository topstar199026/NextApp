const constants = require('../config/constant');

var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

module.exports = function(passport) {
	var jwtOptions = {}
	jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	jwtOptions.secretOrKey = constants.secretOrKey;

	var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
        var user = jwt_payload;
		if(user)
			next(null, user);
		else
			next(null,null);
	});
		
	passport.use(strategy);
};
