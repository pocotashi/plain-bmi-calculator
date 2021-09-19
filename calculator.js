const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("Your power level is over " + result + "!!!!!!!")

})

app.get('/bmicalculator', function(req,res){
  res.sendFile(__dirname + "/bmi.Calculator.html");
})

app.post('/bmicalculator', function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = Math.round((weight / (height * height)) *100) / 100;
  res.send("Your BMI is " + bmi + " kg/m^2")

})


app.listen(port, function (){
  console.log("The server's level is over 3000!!!!!!!!!!!!");
});
