module.exports = app => {
    const track = require("../controllers/track.controller.js");
    var router = require("express").Router();
    // Create a new Track
    router.post("/track/add", track.create);
    // Retrieve all Track
    router.get("/tracks", track.findAll);
    // Retrieve a single Track with id
    router.get("/track/:id", track.findOne);
    // Update a Track with id
    router.put("/track/:id", track.update);
    // Delete a Track with id
    router.delete("/track/:id", track.delete);
    // Delete all Track
    router.delete("/tracks", track.deleteAll);
    app.use('/api/v1', router);
  };