const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    acquire: dbConfig.acquire,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require('./student.model.js')(sequelize, Sequelize);
db.subjects = require('./subject.model.js')(sequelize, Sequelize);
db.teachers = require('./teacher.model.js')(sequelize, Sequelize);

module.exports = db;