const jwt = require("jsonwebtoken")
const { models } = require("../models")


const validateSession = async (req, res, next) => {
    try {
        if (req.method == "OPTIONS") {
            console.log(req.headers);
            next()
        } else if (req.headers.authorization) {
            const {authorization} = req.headers
        
            const payload = authorization ? jwt.verify(authorization, process.env.JWT_SECRET) : undefined
            console.log(payload);
    
            if (payload) {
                const foundUser = await models.UserModel.findOne({where: { id: payload.id}});
                if (foundUser) {
                    req.user = foundUser
                    next()
                } else {
                    res.status(400).json({
                        message: "User not found"
                    })
                }
            } else {
                res.status(401).json({
                    message: "Invalid Token"
                })
            }
        } else {
            res.status(403).json({
                message: "Forbidden"
            })
        }
    } catch (err) {
        res.json({
            message: `${err}`
        })
    }
}

module.exports = validateSession