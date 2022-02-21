var developMode = false;

var jwtSecret = 'Hello Express';
var secretOrKey = 'myExpressTestWork';

var mongoUri= process.env.MONGODB_URI || process.env.MONGO_HOST
|| 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/nextTestDb';


module.exports = {
    developMode : developMode,
    secretOrKey : secretOrKey,
    jwtSecret: jwtSecret,
    mongoUri: mongoUri,
};