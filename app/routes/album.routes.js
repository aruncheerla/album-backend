module.exports = app => {
    const album = require("../controllers/album.controller.js");
    var router = require("express").Router();
    // Create a new Album
    router.post("/add", album.create);
    // Retrieve all Album
    router.get("/", album.findAll);
    // Retrieve a single Album with id
    router.get("/:id", album.findOne);
    // Update a Album with id
    router.put("/:id", album.update);
     // Retrieve Artist with Name
    router.get("/search/:albumName", album.findAllAlbum);
    // Delete a Album with id
    router.delete("/:id", album.delete);
    // Delete all Album
    router.delete("/", album.deleteAll);
    app.use('/api/album', router);
  };