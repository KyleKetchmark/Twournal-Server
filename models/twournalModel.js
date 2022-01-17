const {DataTypes} = require("sequelize")
const db = require("../db")

const Twournal = db.define("twournal", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {max: 75}
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {max: 1000}
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    twitterAct: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

module.exports = Twournal;