const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

mongoose.connect(keys.mongoURI);
//  http://localhost:5000/auth/google
//mongodb+srv://Perach:j8gAtLFxEYw1tRc1@feedbackly-iqgy9.mongodb.net/test?retryWrites=true&w=majority

const PORT = process.env.PORT || 5000;
app.listen(PORT);
