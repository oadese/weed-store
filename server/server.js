const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();
const stripe = require("stripe")("Token");
const publicPath = path.join(__dirname, "..", "public");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(3001, () => {
  console.log("Server is up!");
});
app.post("/test-charge", function (req, res) {
  //Get the price in this request
});

//Paymentpage Route
app.post("/charge", function (req, res) {
  var stripeToken = req.body.stripeToken;
  var email = req.body.email;
  console.log(email);

  const productPrice = 1;

  (async function () {
    // Create a Customer:

    // Charge the Customer instead of the card:
    const charge = await stripe.charges.create(
      {
        amount: productPrice * 100,
        currency: "cad",
        source: stripeToken, // obtained with Stripe.js
        description: "Charge for Global Link Travel INC.",
      },

      function (err, charge) {
        // asynchronously called
      }
    );

    // YOUR CODE: Save the customer ID and other info in a database for later.
  })();

  // YOUR CODE: Save the customer ID and other info in a database for later.
});
