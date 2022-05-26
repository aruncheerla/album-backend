module.exports = (sequelize, Sequelize) => {
    const Track = sequelize.define("track", {
      artist_name: {
        type: Sequelize.STRING
      },
      track_name: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      }
    });
    return Track;
  };