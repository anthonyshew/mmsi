const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const validator = require('validator')

const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.AGENCY_DB_URL,
    ssl: true,
})

router.use(bodyParser.json())

router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password || !validator.isEmail(req.body.email + '') || !validator.isAscii(req.body.password)) {
        return res.send({
            errors: ['Please provide valid credentials for all fields.'],
            data: {}
        })
    }

    const { email: reqEmail, password: reqPassword, domain } = req.body

    pool.connect()
        .then(client => {
            return client.query(`SELECT * FROM  client WHERE email = '${reqEmail}'`)
                .then(response => {
                    client.release()
                    return response.rows[0]
                })
                .then(userInfo => {
                    if (userInfo === undefined) {
                        return res.send({
                            errors: [`It doesn't look like we have a user with that e-mail address.`],
                            data: {}
                        })
                    }

                    const { email: dbEmail, password: dbPassword, domain: dbDomain } = userInfo

                    const isPasswordMatched = bcrypt.compareSync(reqPassword, dbPassword)

                    if (isPasswordMatched) {
                        const token = jwt.sign({
                            email: dbEmail,
                            domain: dbDomain
                        },
                            process.env.JWT_SECRET,
                            { expiresIn: '1 day' }
                        )
                        res.send({
                            statusCode: 200,
                            success: true,
                            errors: [],
                            user: req.body.user,
                            data: { jwt: token }
                        })
                    } else {
                        res.send({
                            statusCode: 400,
                            success: false,
                            errors: ['Wrong password. Try again.'],
                            data: {},
                        })
                    }
                })
        })
        .catch(err => console.log(err))
})

router.get('/logout', (req, res) => {
    res.send({
        statusCode: 200,
        success: true,
        errors: [],
        data: {
            bool: false
        }
    })
})

//Route route for this router: /api/auth/auth
module.exports = router