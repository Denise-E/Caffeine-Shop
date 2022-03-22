const express = require('express');
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () =>
  console.log(
    "Server corriendo en puerto http://localhost:" + app.get("port")
  )
);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));


app.use(express.static(path.resolve(__dirname, "../public")));