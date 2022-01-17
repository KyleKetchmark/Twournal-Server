const db = require('../db')

const UserModel = require('./userModel');
const TwournalModel = require('./twournalModel');
const TweetModel = require('./tweetModel');

UserModel.hasMany(TwournalModel);
UserModel.hasMany(TweetModel);

TwournalModel.belongsTo(UserModel);
TwournalModel.hasMany(TweetModel);

TweetModel.belongsTo(TwournalModel)

module.exports = {
    dbConnection: db,
    models: {
    UserModel,
    TwournalModel,
    TweetModel
    }
}
