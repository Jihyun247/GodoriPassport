const Certification = require('./certification')
const Sport = require('./sport')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('CertiSport', {
        user_id: { // 좋아요 한 사용자
            type: DataTypes.INTEGER,
            reference: {
                model: Certification,
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