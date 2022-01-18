const {DataTypes} = require("sequelize")
const db = require("../db")

const Twournal = db.define("twournal", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
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
    },
    tweetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = Twournal;