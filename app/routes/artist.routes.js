module.exports = app => {
  const artist = require("../controllers/artist.controller.js");
  var router = require("express").Router();
  // Create a new Artist
  router.post("/add", artist.create);
  // Retrieve all Artist
  router.get("/", artist.findAll);
  // Retrieve a single Artist with id
  router.get("/:id", artist.findOne);
  // Update a Artist with id
  router.put("/:id", artist.update);
  // Delete a Artist with id
  router.delete("/:id", artist.delete);
  // Delete all Artist
  router.delete("/", artist.deleteAll);
  app.use('/api/artist', router);
};