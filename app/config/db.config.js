module.exports = {
  HOST: "pathshaladb.cpw4f0jmuwaw.ap-south-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "Ravi_311",
  DB: "album_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};