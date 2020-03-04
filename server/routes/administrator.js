const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const sendGrid = require('@sendgrid/mail')

const validator = require('validator')

const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.AGENCY_DB_URL,
    ssl: true,
})

router.use(bodyParser.json())

router.post(`/change-password`, (req, res) => {
    const { currentPassword, newPassword, confirmNewPassword } = req.body

    if (newPassword !== confirmNewPassword) {
        return res.send({
            errors: { message: 'The new password fields do not match!' },
            data: null
        })
    }

    if (validator.isEmpty(currentPassword + '') || validator.isEmpty(newPassword + '') || validator.isEmpty(confirmNewPassword + '')) {
        return res.send({
            errors: { message: 'Please provide valid credentials for all fields.' },
            data: null
        })
    }

    pool.connect()
        .then(client => {
            return client.query(`SELECT * FROM  client WHERE email = '${process.env.EMAIL_TO}'`)
                .then(response => {
                    client.release()
                    return response.rows[0]
                })
                .then(userInfo => {
                    if (userInfo === undefined) {
                        return res.send({
                            errors: { message: `It doesn't look like we have a user with that e-mail address.` },
                            data: {}
                        })
                    }

                    const { password: dbPassword } = userInfo

                    const isPasswordMatched = bcrypt.compareSync(currentPassword, dbPassword)

                    if (isPasswordMatched) {
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newPassword, salt, (err, salt) => {
                                pool.connect()
                                    .then(client => {
                                        return client.query(`UPDATE client SET password = '${salt}' WHERE email = '${process.env.EMAIL_TO}'`)
                                            .then(response => {
                                                client.release()
                                                return res.send({
                                                    statusCode: 200,
                                                    success: true,
                                                    errors: {},
                                                })
                                            })
                                    })
                            })
                        })
                    } else {
                        res.send({
                            statusCode: 400,
                            success: false,
                            errors: { message: 'Wrong password. Try again.' },
                            data: {},
                        })
                    }
                })
        })
        .catch(err => console.log(err))
})

router.post(`/forgot-password`, (req, res) => {
    pool.connect()
        .then(client => {
            return client.query(`SELECT * FROM  client WHERE email = '${process.env.EMAIL_TO}'`)
                .then(response => {
                    client.release()
                    return response.rows[0]
                })
                .then(userInfo => {
                    if (userInfo === undefined) {
                        return res.send({
                            statusCode: 301,
                            success: false,
                            errors: { message: `It doesn't look like we have a user with that e-mail address.` },
                            data: null
                        })
                    } else {

                        const token = jwt.sign(
                            { email: process.env.EMAIL_TO },
                            process.env.JWT_SECRET,
                            { expiresIn: '1 hour' }
                        )

                        const emailMessage = {
                            to: process.env.EMAIL_TO,
                            from: "anthony@shewperman.dev",
                            subject: 'Reset Your Password',
                            html: `<h1>Reset your password by clicking the button below</h1>
                            <h2>P.S. The link will expire in 1 hour.</h2>
                    <a style=" display: inline-block; margin-bottom: 1rem; padding: 1rem; border-radius: 1rem; background-color: #131241; color: white; font-weight: 900; text-decoration: none; " href="${process.env.DOMAIN_ROOT}/reset-password/${token}">Reset Password</a>
                    `,
                        }

                        sendGrid.send(emailMessage)
                        return res.send({
                            statusCode: 200,
                            success: true,
                            errors: {},
                            data: null
                        })

                    }
                })
        })
})

router.post(`/reset-password`, (req, res) => {
    const { token, newPassword, confirmNewPassword } = req.body

    if (newPassword !== confirmNewPassword) {
        return res.send({
            errors: { message: 'The new password fields do not match!' },
            data: null
        })
    } else if (validator.isEmpty(newPassword + '') || validator.isEmpty(confirmNewPassword + '')) {
        return res.send({
            errors: { message: 'Please provide valid credentials for all fields.' },
            data: null
        })
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            console.log(decoded)
            if (decoded.email !== process.env.EMAIL_TO) {
                return res.send({
                    statusCode: 301,
                    success: false,
                    errors: { message: 'Please stop trying to hack this page. Thank you.' },
                    data: null
                })
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newPassword, salt, (err, salt) => {
                        pool.connect()
                            .then(client => {
                                return client.query(`UPDATE client SET password = '${salt}' WHERE email = '${process.env.EMAIL_TO}'`)
                                    .then(response => {
                                        client.release()
                                        return res.send({
                                            statusCode: 200,
                                            success: true,
                                            errors: {},
                                        })
                                    })
                            })
                    })
                })
            }
        })
    }
})

//Root route for this router: /api/administrator
module.exports = router