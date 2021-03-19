module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Certification', {

        ex_time: { // 운동시간
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        ex_intensity: { // 운동강도
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        ex_evalu: { // 운동평가선택
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        ex_comment: { // 운동코멘트
            type: DataTypes.TEXT(),
            allowNull: true,
        },
        parse_date: { // 몇분전 파싱
            type: DataTypes.STRING(20),
            allowNull:true,
        }
    }, {
        freezeTableName: true,
        timestamps: true,
        underscored: true,
    });
};