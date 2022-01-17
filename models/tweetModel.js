const {DataTypes} = require("sequelize")
const db = require("../db")

const Tweet = db.define("tweet", {
    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tweetBody: {
        type: DataTypes.STRING,
        allowNull: true
    },
    datePublished: {
        type: DataTypes.DATE,
        allowNull: false
    },
    // owner: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // twournalId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
});

module.exports = Tweet;