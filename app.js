//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

var items = [];
let workItems = [];

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    let day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {
    item = req.body.newItem;
    item = item.trim();

    if (item !== "") {
        items.push(item);
        res.redirect("/");
    } else {
        res.redirect("/")
    }
})

app.listen(3001, function(){
  console.log("Server started on port 3001.");
});
