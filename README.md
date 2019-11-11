# L2K_NoteTaker

This application's purpose is to write, save, and delete notes. The notes are saved as data in a JSON file which pays the role of a pseudo-database.

The application frontend was prewritten for us with the requirement being to create endpoints to call the html files and save, list and delete notes. The endpoints to be created are:

- The application utilizes a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

- The following API routes should be created:

* GET `/notes` - Should return the `notes.html` file.

* GET `*` - Should return the `index.html` file

* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

* POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. Each note created is assigned a numeric ID which is populated with the length of an intermediate array which holds the contents of the db.json file.

* DELETE `/api/notes/:id` - Should receive a query paramter containing the id of a note to delete. The note chosen for deletion is removed by using the filter method.

Technology used:
Express
Postman
HTML
JSON
