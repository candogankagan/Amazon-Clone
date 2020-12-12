const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
    'sk_test_51HvqUIJx5IfGdNWf62hHWPDOaLTUPkvWnQWRyrHm62CQf5krVZieIGXZ8gW0GKCDr3IBTluxcn6huse1S2BTshDp00P1bMVRAq'
)

// api

// api config

const app = express()

// middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// api routes
app.get('/', (request, response) => response.status(200).send('hello'))

// listen command
exports.api = functions.https.onRequest(app)
