const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51IvaYNSH3tCCCxyJjg51x6Ydj6eO1yyfzHxiBor9yuS3Pl3P9ooWzCd3gVnJUV8lCiw9g1uwPJvFSjozMuc7SDtd00RZv70asK');

//API


//-App Config
const app = express();


//-MiddleWares
app.use(cors({origin:true}));
app.use(express.json());

//-Api Routes
app.get('/',(request , response) => response.status(200).send('hello world'));

app.post("/payments/create", async (request , response) => {

const total = request.query.total;

console.log('payment request recieved BooM!!' , total);

const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });


  //ok -created
  response.status(201).send({
      clientSecret:paymentIntent.client_secret,
  })

});

  
//-Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/potshop-da2d9/us-central1/api
