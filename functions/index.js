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

app.post('/payments/create', async (request, response) => {
    const total = request.query.total

    console.log(`Payment request recieved >>>`, total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/challenge-8b632/us-central1/api
