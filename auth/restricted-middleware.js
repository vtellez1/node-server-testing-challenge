const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    
    if(token){
        jwt.verify(token, jwtSecret, (err, decodedToken) =>{
            if(err){
                //token is not valid if this is triggered
                res.status(401).json({ you: 'cannot touch this!'})
            } else {
                next();
            }
        })
    } else {
        res.status(400).json({ message: 'No creds provided' });
    }
};