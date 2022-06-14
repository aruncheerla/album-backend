module.exports = (sequelize, Sequelize) => {
  const Track = sequelize.define("track", {
    track_name: {
      type: Sequelize.STRING
    },
    track_album: {
      type: Sequelize.STRING
    },
    track_artist: {
      type: Sequelize.STRING
    },
    track_number: {
      type: Sequelize.STRING
    },
    track_length: {
      type: Sequelize.STRING
    },
    track_description: {
      type: Sequelize.STRING
    },
    track_audio: {
      type: Sequelize.STRING
    },
    track_lyrics: {
      type: Sequelize.STRING
    }
  });
  return Track;
};