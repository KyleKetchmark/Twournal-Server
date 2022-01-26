const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: process.env.ENVIRONMENT === 'production'
})

const db = new Sequelize("postgres://postgres:dbLocal@localhost:5432/Twournals")

module.exports = db

// const {Sequelize} = require("sequelize")

// const db = new Sequelize("postgres://postgres:dbLocal@localhost:5432/Twournals")

// module.exports = db;