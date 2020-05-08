const express = require("express");
const path = require("path");
const morgan = require('morgan')

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"))
app.use(morgan('tiny'));

htmlRoutes(app);
apiRoutes(app);


app.listen(PORT, function(){
  console.log("app is listening on http://localhost:" + PORT);
})