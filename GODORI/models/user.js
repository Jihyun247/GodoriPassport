module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {

        nickname: { // 닉네임
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: 'nickname'
        },
        name: { // 이름
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        password: { // 비밀번호
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        salt: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        profile_img: { // 프로필 이미지
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        sex: { // 성별
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        height: { // 키
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        weight: { // 몸무게
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        goal: { // 운동 목표
            type: DataTypes.STRING(50),
            allowNull: true,
        }
    }, {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        underscored: true,
    });
};