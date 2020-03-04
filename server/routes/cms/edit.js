const express = require('express')
const router = express.Router()
const CMS = require('./schema')

router.post("/:id", (req, res) => {
    CMS.findByIdAndUpdate(
        req.params.id,
        { content: req.body.formInput },
        { new: true },
        (err, content) => {
            if (err) {
                console.log("CMS UPDATING ERROR", err)
                return res.send({
                    statusCode: 500,
                    success: false,
                    errors: ["Server issue. Contact Shewperman."],
                    data: null
                })
            }
            return res.send({
                statusCode: 200,
                success: true,
                errors: {},
                data: null
            })
        }
    )
})

//Root route for this router: /api/cms/edit
module.exports = router