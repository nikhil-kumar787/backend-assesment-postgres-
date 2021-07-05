module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "samnik787",
    DB: "tododb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
