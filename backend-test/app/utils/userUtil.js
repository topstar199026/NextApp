const jwt  = require('jsonwebtoken');
const errorHandler = require('../helpers/dbErrorHandler');
const constants = require('../config/constant');
const User = require('../models/user.model');
const Message = require('../models/message.model');

const login = async (values) => {
    try {
        const user = await User.findOne({
           'email': values.email
        });
        if(user){
            if(user.authenticate(values.password)){
                const payload = {
                    id: user.id,
                };                
                const token = jwt.sign(payload, constants.secretOrKey);

                return {
                    success: true,
                    token: token,
                    user: {
                        id: user.id,
                        email: user.email,
                    },
                    message: 'Successfully sign in.!'
                }
            }else{
                return {
                    success: false,
                    message: 'Password does not match.!'
                }
            }            
        }else{

        }
    } catch (error) {
        console.log('error', errorHandler.getErrorMessage(error))
        return {
            success: false,
            message: errorHandler.getErrorMessage(error)

        }
    }
	
}

const register = async (values) => {
    try {
        const user = new User(values)
        await user.save();
        return {
            success: true,
            message: 'Successfully signed up!'
        }
    } catch (error) {
        console.log('error', errorHandler.getErrorMessage(error))
        return {
            success: false,
            message: errorHandler.getErrorMessage(error)

        }
    }
	
}

const userList = async (values) => {
    console.log(values)
}

module.exports = {
    login,
    register,
    userList,
};