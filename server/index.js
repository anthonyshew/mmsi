if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const sendGrid = require('@sendgrid/mail')
const validator = require('validator')

const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const isDev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 5000

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`)
  })

} else {
  const app = express()

  sendGrid.setApiKey(process.env.SENDGRID_API_KEY)

  const logger = () => {
    return (req, res, next) => {
      res.on('finish', () => {
        if (res.statusCode === 200) console.log(`${chalk.blue('[' + new Date(Date.now()).toLocaleString() + ']')} ${chalk.green("[200] ") + req.originalUrl}`)
        if (res.statusCode === 304) console.log(`${chalk.blue('[' + new Date(Date.now()).toLocaleString() + ']')} ${chalk.yellow("[304] ") + req.originalUrl}`)
        if (res.statusCode === 404) console.log(`${chalk.blue('[' + new Date(Date.now()).toLocaleString() + ']')} ${chalk.red("[404] ") + req.originalUrl}`)
        if (res.statusCode === 500) console.log(`${chalk.blue('[' + new Date(Date.now()).toLocaleString() + ']')} ${chalk.bgRed("[500]") + " " + req.originalUrl}`)
      })
      next()
    }
  }

  const requireHTTPS = (req, res, next) => {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
      return res.redirect('https://' + req.get('host') + req.url)
    }
    next()
  }

  app.use(logger())
  app.use(requireHTTPS)
  app.use(bodyParser.json())

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../client/public'), {
    // Prevents router from using above line as index response
    index: false,
  }))

  let api = require('./api')
  app.use('/api', api)

  app.get('/owner-admin', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public/owner-admin', 'index.html'))
  })

  // All remaining requests return the React app, so it can handle routing.
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
  })

  app.listen(PORT, () => {
    console.log(chalk.underline(`Node ${isDev ? 'Dev Server' : 'Cluster Worker ' + process.pid}: Listening on port ${PORT}.`))
  })
}
