module.exports = (sequelize, Sequelize) => {
  const Artist = sequelize.define("artist", {
    artist_name: {
      type: Sequelize.STRING
    },
    artist_type: {
      type: Sequelize.STRING
    }
  });
  return Artist;
};