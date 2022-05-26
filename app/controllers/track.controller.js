const db = require("../models");
const Track = db.track;
const Op = db.Sequelize.Op;
// Create and Save a new Track
exports.create = (req, res) => {
  // Validate request
  if (!req.body.trackName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Track
  const track = {
    artist_name: req.body.artistName,
    track_name: req.body.trackName,
    duration:req.body.duration
  };
  // Save Track in the database
  Track.create(track)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Track."
      });
    });
};