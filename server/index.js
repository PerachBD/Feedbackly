const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

//  http://localhost:5000/auth/google
const PORT = process.env.PORT || 5000;
app.listen(PORT);
