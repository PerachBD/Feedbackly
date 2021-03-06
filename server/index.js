const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require('body-parser');
require("./models/User");
require("./models/Survey")
require("./services/passport");

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days in millis
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === 'production'){
  const path =require("path");
  // express will serve production assets
  // like our main.js file, or main.css file
  app.use(express.static(path.resolve(__dirname,'client/build')));

  // express will serve up the index.html file
  // if it doesn't recognize the route
  
  app.get("*",(req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//npx create-react-app client

const PORT = process.env.PORT || 5000;
app.listen(PORT);
