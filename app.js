// app.js
const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('handlebars');
const S = require("./snippet.js");
const fs = require('fs');

let snippetArr = [];
let done = false;

function getFiles() {
	fs.readdir("./code-samples", (err, files) => {
		if (err) {
			throw err;
		}
		for(let i = 0; i < files.length; i++) {
			if(files[i].includes(".js")) {
				console.log("File: " + files[i]);
				fs.readFile("./code-samples/" + files[i], 'utf8', (err, data) => {
					if (err) {
						throw err;
					}
					let fileContent = data.split("\n");
					let tags = fileContent.shift().substring(2);
					let snipTags = tags.split(",");
					let snip = new S.Snippet(
						files[i], 
						fileContent.join("\n"), 
						snipTags
						);
					snippetArr.push(snip);
					
				
					//console.log(snippetArr);
					/*
					console.log("here's its code: \n" + snip.code);
					console.log("And its tags: " + snip.tags + "\n");
					*/
				});
			}
		}
		return 1;
	});
}

function listen() {
	app.listen(3000);
	console.log("Server started; type CTRL+C to shut down\n");
}

function stepByStep(step1, step2) {
	step1();
	setTimeout(step2, 1000);
}


app.set('view engine', 'hbs');

stepByStep(getFiles, listen); //read and get all files first, then connect to server

const publicPath = path.resolve(__dirname, "public");

app.use(express.urlencoded());
app.use(function(req, res, next) {
	console.log("Method: " + req.method + "\n");
	console.log("Path: " + req.path + "\n");
	console.log("Query: ");
	console.log(req.query);
	console.log("\n");
	next();
});
app.use(express.static(publicPath));
app.get("/", (req, res) => {
	//here is where I would use the form data received to route any specific snippets, ran out of time
	res.render("home", {snippetArr: snippetArr});
});




