const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const mongojs = require('mongojs')


var cString = "mongodb+srv://shyam_123:nalini78@cluster0.a1sh7.mongodb.net/Registed?retryWrites=true&w=majority"
const db = mongojs(cString, ['details'])
const app = express();

var typeSelected = [];
var stateSelected = [];


app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html")
})


app.get('/submit', function(req, res) {
  res.sendFile(__dirname + "/submit.html")
})

app.post('/submit', function(req, res) {
  db.details.insert(req.body, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  })

  res.sendFile(__dirname + "/submit.html")
})

app.get('/search', function(req, res) {

  var a = {
    bloodtype: typeSelected[0],
    state: stateSelected[0]
  }


  db.details.find(a, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.render('search', {
        donors: docs
      })
    }
  })
})

app.post('/search', function(req, res) {

  let bloodtype = req.body.bloodtype;
  let state = req.body.state;
  typeSelected.push(bloodtype);
  stateSelected.push(state);

  res.redirect("/search");
})

app.post('/return', function(req, res) {
  res.redirect("/")
})




app.listen(3000, function() {
  console.log("Running in server 3000")
})
