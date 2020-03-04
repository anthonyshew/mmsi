const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')

router.use(bodyParser.json())

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET,
    accessKeyId: process.env.AWS_ID,
    region: process.env.AWS_REGION
})

let s3 = new aws.S3()

let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'shewperman',
        acl: 'public-read',
        metadata: (req, file, callback) => {
            callback(null, { fieldname: "Testing metadata" })
        },
        key: (req, file, callback) => {
            callback(null, Date.now().toString() + file.originalname)
        }
    })
})

router.post("/", upload.single('example-file'), (req, res) => {
    res.send({
        statusCode: 200,
        success: true,
        errors: [],
        data: "Successfully uploaded your file!"
    })
})

//Root route for this router: /api/fileUpload
module.exports = router