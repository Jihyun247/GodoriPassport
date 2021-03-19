const Sport = require('./sport')
const User = require('./user')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('UserSport', {
        user_id: { // 좋아요 한 사용자
            type: DataTypes.INTEGER,
            reference: {
                model: User,
                key: 'id',
            }
        },
        sport_id: { // 좋아요 달린 인증게시물
            type: DataTypes.INTEGER,
            reference: {
                model: Sport,
                key: 'id',
            }
        }
    }, {
        freezeTableName: true,
        timestamps: true,
        underscored: true,
    });
};