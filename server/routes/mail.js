const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const sendGrid = require('@sendgrid/mail')
const validator = require('validator')

router.use(bodyParser.json())

//Sends emails from contact form with three basic form fields
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

router.post(`/service-request`, (req, res) => {
    let { message } = req.body

    let errors = {
        message: validator.isEmpty(message + '') ? "Please provide a message." : null
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
            to: process.env.AGENCY_EMAIL,
            from: process.env.EMAIL_TO,
            subject: 'Message from MMSI!',
            html: `<h1>Service Request from MMSI!</h1>
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

//Route route for this router: /api/mail
module.exports = router