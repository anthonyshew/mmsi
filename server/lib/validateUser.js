const jwt = require('jsonwebtoken')

const validateUser = (req, res, next) => {
    jwt.verify(req.headers.authorization, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log("Invalid User Token")
            res.send({
                statusCode: 401,
                success: false,
                errors: [err.message],
                data: null
            })
        } else {
            req.body.user = decoded
            next()
        }
    })
}

module.exports = validateUser