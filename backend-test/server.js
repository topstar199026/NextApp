const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const passport = require('passport');

require('./app/utils/passport.util')(passport);

const app = express();
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application." });
});
app.use(cors('*'))
const userRoutes = require('./app/routes/user.route');
app.use('/', userRoutes);
const PORT = process.env.PORT || 830;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`,new Date());
});