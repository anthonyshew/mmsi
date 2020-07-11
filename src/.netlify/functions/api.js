require('dotenv').config()
const express = require('express')
const serverless = require('serverless-http')
const sendGrid = require('@sendgrid/mail')

const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
sendGrid.setApiKey(process.env.SENDGRID_API_KEY)

router.post(`/contact-form`, (req, res) => {
    let { name, email, message } = req.body

    let errors = {
        name: validator.isEmpty(name + '') ? "Required" : null,
        email: !validator.isEmail(email + '') ? "Invalid Address" : validator.isEmpty(email + '') ? "Required" : null,
        message: validator.isEmpty(message + '') ? "Required" : null
    }

    if (Object.values(errors).some(elem => elem !== null)) {
        return res.send({
            statusCode: 401,
            success: false,
            errors: errors,
            data: null
        })
    } else {
        const emailMessage = {
            to: process.env.EMAIL_TO,
            from: email,
            subject: 'Message from Website Contact Form!',
            html: `<h1>Incoming Mail from your website!</h1>
        <h2>${name} said...</h2>
        <p>${message}</p>
        <br>
        <hr>
        <p>Reply to this message using the reply button below to send an e-mail response.</p>
        `,
        }

        sendGrid.send(emailMessage)

        res.send({
            statusCode: 200,
            success: true,
            errors: [],
            data: null
        })
    }
})

if (process.env.ENVIRONMENT !== 'PRODUCTION') {
    app.use('/api', router)
} else {
    app.use('/.netlify/functions/api', router)
}


module.exports = app
module.exports.handler = serverless(app)