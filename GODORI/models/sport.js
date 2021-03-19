module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Sport', {

        name: { // 스포츠 종류
            type: DataTypes.STRING(10),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};