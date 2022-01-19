const db = require('../db')

const UserModel = require('./userModel');
const TwournalModel = require('./twournalModel');

TwournalModel.belongsTo(UserModel);
UserModel.hasMany(TwournalModel);

module.exports = {
    dbConnection: db,
    models: {
    UserModel,
    TwournalModel
    }
}
