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
reservations.push(new TableReservation('002','Kevin','kevin@gmail.com', '4532545455'));



// Routes
app.get("/", function(req, res) {
 res.send("Welcome to Hot Restaurant Page!");
});

app.get("/api/tables", function(req, res) {
    res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    res.json(waitList);
});


app.listen(PORT, function() {
  console.log("App listening at PORT " + PORT);
});
