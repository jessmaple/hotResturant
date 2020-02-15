const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

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