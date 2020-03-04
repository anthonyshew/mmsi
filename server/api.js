const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())

let cms = require('./routes/cms')
router.use('/cms', cms)

let auth = require('./routes/auth/auth')
router.use('/auth/', auth)

let administrator = require('./routes/administrator')
router.use('/administrator', administrator)

let mail = require('./routes/mail')
router.use('/mail', mail)

let fileUpload = require('./routes/fileUpload')
router.use('/fileUpload', fileUpload)

router.use((req, res, next) => {
    console.log("A 404 has occurred on the /api route.")
    res.status(404).end()
})

// Root route for this router: /api
module.exports = router