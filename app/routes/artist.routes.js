module.exports = app => {
  const artist = require("../controllers/artist.controller.js");
  var router = require("express").Router();
  // Create a new Artist
  router.post("/artist/add", artist.create);
  // Retrieve all Artist
  router.get("/artist", artist.findAll);
  // Retrieve a single Artist with id
  router.get("/artist/:id", artist.findOne);
  // Update a Artist with id
  router.put("/artist/:id", artist.update);
  // Delete a Artist with id
  router.delete("/artist/:id", artist.delete);
  // Delete all Artist
  router.delete("/artist", artist.deleteAll);
  app.use('/api/v1', router);
};