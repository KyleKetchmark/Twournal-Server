const {Sequelize} = require("sequelize")

const db = new Sequelize("postgres://postgres:dbLocal@localhost:5432/Twournals")

module.exports = db