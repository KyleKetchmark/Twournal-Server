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
    } 
});

module.exports = Tweet;