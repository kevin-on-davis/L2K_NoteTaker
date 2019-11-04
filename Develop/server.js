var fs = require("fs");
var express = require("express");
var path = require("path");
var app = express();

var PORT = 3000;

var notebook = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("db"));

app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

// Basic route that sends the user first to the AJAX Page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "/db/db.json"), function (err, data) {
        notebook = JSON.parse(data);
        req.body.id = notebook.length + 1;
        notebook.push(req.body)
        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(notebook), function (err) {
            if (err) throw err;
        });
    });
});

app.delete("/api/notes/:id", function (req, res) {
    fs.readFile(path.join(__dirname, "/db/db.json"), function (err, data) {
        notebook = JSON.parse(data);
        console.log(notebook[2].id);
        new_array = notebook.filter((note, index) => note[index].id !== req.params.id);
        console.log("My result", new_array);
        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(notebook.filter(note => note.id !== req.params.id)), function (err) {
            if (err) throw err;
        });

    });
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
