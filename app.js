const express = require("express");
const path = require("path");
const morgan = require ("morgan");
const bodyParser = require ("body-parser");
const app = express();

const port = 3030

app.set("port", process.env.PORT || 3030);

app.set("views", path.join(__dirname, "views"));

app.set( "view engine" ,"ejs");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require ("./routes/index")(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })