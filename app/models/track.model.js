module.exports = (sequelize, Sequelize) => {
    const Track = sequelize.define("track", {
      track_name: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      track_side: {
        type: Sequelize.STRING
      },
      link_audio: {
        type: Sequelize.STRING
      },
      link_lyrics: {
        type: Sequelize.STRING
      }
    });
    return Track;
  };