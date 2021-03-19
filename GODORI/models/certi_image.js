const Certification = require('./certification')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('CertiImage', {
        // certi_id: { // 좋아요 한 사용자
        //     type: DataTypes.INTEGER,
        //     reference: {
        //         model: Certification,
        //         key: 'id',
        //     }
        // },
        image: { // 프로필 이미지
            type: DataTypes.STRING(200),
            allowNull: true,
        }
    }, {
        freezeTableName: true,
        timestamps: true,
        underscored: true,
    });
};