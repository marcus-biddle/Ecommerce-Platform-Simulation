const express = require('express');
const app = express();
const cors = require("cors");
const { resolve  } = require("path");
const env = require("dotenv").config({ path: "./.env"});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
});

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.static('public'));

// app.get("/", (req, res) => {
//     const path = resolve(process.env.STATIC_DIR + "/index.html");
//     res.sendFile(path);
// })

app.get('/config', (req, res) => {
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    res.status(200).send({ publishableKey: publishableKey });
});

app.post("/create-payment-intent", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "USD",
            amount: 1999,
            automatic_payment_methods: { enabled: true },
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    };
});

app.listen(5252, () => {
    console.log('Node server listening at port 3001')
})

module.exports = app