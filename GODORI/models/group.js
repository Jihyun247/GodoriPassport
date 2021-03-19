module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Group', {

        group_name: { // 닉네임
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: 'group_name'
        },
        recruit_num: { // 모집 인원
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        is_public: { // 공개 여부
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        intro_comment: { // 소개 코멘트
            type: DataTypes.TEXT(),
            allowNull: true,
        },
        ex_cycle: { // 운동 주기
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        ex_intensity: { // 운동 강도
            type: DataTypes.STRING(10),
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