const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const CMS = require('./schema')
const validateUser = require('../../lib/validateUser')

router.use(bodyParser.json())

mongoose.connect(process.env.CMS_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB successfully connected.'))
    .catch(err => {
        console.error('MONGODB CONNECTION ERROR!')
        console.error(err)
    })

//This route only needs to be used once to create the CMS master document.
//I can just hit it with Postman.
router.post("/create", (req, res) => {
    let newContent = new CMS({
        content: {
            home: {
                columnOne: {
                    title: "Custom Solutions",
                    content: "We understand that every building we get to work on has different needs for those who are going to live, work, and breathe within its walls. Creating a tailored design for each site we visit, we strive to ensure that every system we create provides an environment for success for its people."
                },
                columnTwo: {
                    title: "Consultation",
                    content: "Providing expert advice when you need it, MMSI can advise you on any of your HVAC needs. Our background, experience, and knowledge allow us to help understand your HVAC system better, figure out how to fix current problems, and prevent issues that may develop in the future."
                },
                columnThree: {
                    title: "Maintenance",
                    content: "No matter how well your HVAC was installed, problems will occur over time - and we're here when they do. Whether your issues are the result of an accident, poor maintenance, or good ol' Father Time, our knowledgeable technicians can troubleshoot your system and resolve any challenging issue."
                },
                aboutUs: {
                    title: "About Us",
                    content: "From a humble beginning as a one-man shop in 1997, over the past 23 years, MMSI has built a company founded on industry knowledge, honesty, and integrity. We have members on our team who have been with the company for over 20 years servicing customers. We continue to build our reputation with each newly satisfied customer."
                },
                ourWork: {
                    title: "Our Work",
                    content: "MMSI provides everything from routine service calls to quarterly maintenance contracts. We design and build commercial projects and custom homes, specializing in veterinary hospitals and commercial tenant improvements."
                },
            },
            about: {
                headline: {
                    title: "Headline",
                    content: "We're Mission Mechanical Services Inc. and we've been providing HVAC services in Southern California since 1997."
                },
                established: {
                    title: "Established",
                    content: "1997"
                },
                license: {
                    title: "California Contractors License",
                    content: "C20 735483"
                },
                partnerships: {
                    title: "Partnerships",
                    content: "Fujitsu Elite Contractor"
                },
                phoneNumber: {
                    title: "Phone Number",
                    content: "(949) 768-4675"
                },
                email: {
                    title: "Contact Email",
                    content: "rick@missionmechanicalservices.com"
                },
                quality: {
                    title: "Quality",
                    content: "We believe the quality of our work should stand above the rest. We want our customers to know that when they call MMSI, they know they are getting the job done right the first time."
                },
                dependability: {
                    title: "Dependability",
                    content: "Whether we're talking about the MMSI team or the work that we do, we want dependability to be a given. Our service and our installations can be relied on - and our customers know it. You can count on us for your HVAC needs."
                },
                integrity: {
                    title: "Integrity",
                    content: "We strive for the highest marks in integrity in every facet of our business so that our customers are comfortable with our recommendations whether it’s a completely new installation or a decision to repair or replace a system."
                }
            },
            projects: {
                sectionOne: {
                    title: "Veterinary Buildings",
                    content: "We are using this space to give a small description of what this project looks like. Descriptive information belongs here about what this type of project entails."
                },
                sectionTwo: {
                    title: "Medical/Dental Buildings",
                    content: "We are using this space to give a small description of what this project looks like. Descriptive information belongs here about what this type of project entails."
                },
                sectionThree: {
                    title: "Commercial Buildings",
                    content: "We are using this space to give a small description of what this project looks like. Descriptive information belongs here about what this type of project entails."
                },
                sectionFour: {
                    title: "Residential - Custom and Remodel",
                    content: "We are using this space to give a small description of what this project looks like. Descriptive information belongs here about what this type of project entails."
                },
            }
        }
    })

    newContent.save()
        .then(doc => console.log("New document created."))
        .catch(err => console.log(err))
})

router.get("/get-all", (req, res) => {
    CMS.find((err, data) => {
        return res.send({
            statusCode: 200,
            success: true,
            errors: [],
            data: data
        })
    })
})

let edit = require('./edit')
router.use('/edit', validateUser, edit)

//Root route for this router: /api/cms
module.exports = router