const express = require('express');

const app = express();
const PORT = 3000;


let reservations = [];
let waitList = [];

function TableReservation(id, name, email, phone){
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
}

reservations.push(new TableReservation('001','Mesay','mesay@gmail.com', '1232434343'));
// Data
const data1 = {

};

const data2 = {

};


// Routes
app.get("/", function(req, res) {
    res.json(reservations);
//   res.send("Welcome to Hot Restaurant Page!");
});

app.get("/mes", function(req, res) {
  res.json(reservations);
});



app.listen(PORT, function() {
  console.log("App listening at PORT " + PORT);
});
