var fs = require("fs");
var express = require("express");
var path = require("path");
var app = express();

var PORT = 3000;

var notebook = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

// Basic route that sends the user first to the AJAX Page
app.get("/note", function (req, res) {
    // res.sendFile("notes.html");
    // res.sendFile(path.join(__dirname, '../../notes.html'));
    res.sendFile("notes.html");
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
});

app.get("/api/notes", function (req, res) {
    return (res.json(notebook));
});

app.post("/api/notes", function (req, res) {
    var note = req.body;
    console.log(note);

    fs.readFile("db.json", function (err, data) {
        notebook = JSON.parse(res.json(data));
        console.log(notebook);
    })

    // notebook.push({id:notebook.length, })
    if (HR.res_list.length < 5) {
        HR.res_list.push(newReservation);
    }
    else {
        HR.wait_list.push(newReservation);
    }
    res.json(newReservation);
});

app.delete("/api/notes/:id", function (req, res) {
    res.sendFile("index.html");
});

// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
