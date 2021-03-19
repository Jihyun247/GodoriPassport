const Certification = require('./certification')
const User = require('./user')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Comment', {
        content: { // 질문 제목
            type: DataTypes.TEXT(),
            allowNull: false,
        },
        parse_date: { // 몇분전 파싱
            type: DataTypes.STRING(20),
            allowNull:true,
        }
        // user_id: { // 댓글 남긴 사용자
        //     type: DataTypes.INTEGER,
        //     reference: {
        //         model: User,
        //         key: 'id',
        //     }
        // },
        // certi_id: { // 댓 달린 인증게시물
        //     type: DataTypes.INTEGER,
        //     reference: {
        //         model: Certification,
        //         key: 'id',
        //     }
        // }
    }, {
        freezeTableName: true,
        timestamps: true,
        underscored: true,
    });
};