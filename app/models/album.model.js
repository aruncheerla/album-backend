module.exports = (sequelize, Sequelize) => {
    const Album = sequelize.define("album", {
      album_name: {
        type: Sequelize.STRING
      },
      album_year: {
        type: Sequelize.STRING
      },
      album_genre: {
        type: Sequelize.STRING
      }
    });
    return Album;
  };