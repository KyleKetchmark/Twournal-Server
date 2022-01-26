const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: process.env.ENVIRONMENT === 'production'
})

module.exports = sequelize


// const db = new Sequelize("postgres://postgres:dbLocal@localhost:5432/Twournals")

// module.exports = db;