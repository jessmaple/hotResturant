const express = require("express");
const PORT = process.env.PORT || 2000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitList = [];

function TableReservation(id, name, email, phone){
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
}

reservations.push(new TableReservation('002','Kevin','kevin@gmail.com', '4532545455'));


// Routes
app.get("/", function(req, res) {
 res.send("Welcome to Hot Restaurant Page!");
});


app.get("/api/tables", function(req, res) {
    res.json(reservations);
});

app.post("/api/tables", function (req, res) {
  const data = req.body;
  const newTbl = new TableReservation(data.id, data.name, data.email, data.phone);
  if (reservations.length <= 5) {
    reservations.push(newTbl);
  } else {
    waitList.push(newTbl)
  }
  
  res.json({reservations, waitList});
})

app.get("/api/waitlist", function(req, res) {
    res.json(waitList);
});

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});

function handleRequest(req, res) {

    // Capture the url the request is made to
    const path = req.url;
  
    // When we visit different urls, read and respond with different files
    switch (path) {
    
    case "/":
      return fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  
    case "/tables":
      return fs.readFile(__dirname + "/tables.html", function(err, data) {
        if (err) throw err;
        // res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  
    case "/reserve":
      return fs.readFile(__dirname + "/reserve.html", function(err, data) {
        if (err) throw err;
        // res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  
      // default to rendering index.html, if none of above cases are hit
    default:
      return fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) throw err;
        // res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
  }
