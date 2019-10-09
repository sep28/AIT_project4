// app.js
const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('handlebars');

app.set('view engine', 'hbs');

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use()
app.get("/", (req, res) => {
	res.render("home")});

app.listen(3000);
console.log("Server started; type CTRL+C to shut down\n");