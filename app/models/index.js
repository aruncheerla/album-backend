const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.artist = require("./artist.model.js")(sequelize, Sequelize);
db.track = require("./track.model.js")(sequelize, Sequelize);
db.album = require("./album.model.js")(sequelize, Sequelize);

db.artist.hasMany(db.album, { as: "album" });
db.album.belongsTo(db.artist, {
  foreignKey: "artistId",
  as: "artist",
});
db.album.hasMany(db.track, { as: "track" });
db.track.belongsTo(db.album, {
  foreignKey: "albumId",
  as: "album",
});

module.exports = db;