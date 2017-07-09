var express = require("express")

var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

var friends = [{
	name: "Danny",
	link: "http://google.com",
	scores:[4,2,1,2,3]
}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/friends", function(req,res) {
	return res.json(friends)

});

app.post("/api/new", function(req,res) {
	var newFriend = req.body
	friends.push(newFriend)
	console.log(newFriend)

});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});