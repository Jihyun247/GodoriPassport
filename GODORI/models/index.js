const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else { 
sequelize = new Sequelize(config.database, config.username, config.password, config);
}
 
db.sequelize = sequelize; 
db.Sequelize = Sequelize; 

db.User = require('./user')(sequelize, Sequelize);
db.Group = require('./group')(sequelize, Sequelize);
db.Join = require('./join')(sequelize, Sequelize);
db.Certification = require('./certification')(sequelize, Sequelize);
db.Like = require('./like')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Sport = require('./sport')(sequelize, Sequelize);
db.UserSport = require('./user_sport')(sequelize, Sequelize);
db.GroupSport = require('./group_sport')(sequelize, Sequelize);
db.CertiSport = require('./certi_sport')(sequelize, Sequelize);
db.CertiImage = require('./certi_image')(sequelize, Sequelize);

// 외래키 연결 - reference로 연결하든, index.js에서 연결하든 상관 없음, 둘 다 써도 됨, 가독성을 위해서라면 둘 다?

/* 1:N User : Certification */
db.User.hasMany(db.Certification, { foreignKey: 'user_id'});
db.Certification.belongsTo(db.User, { foreignKey: 'user_id'});

/* 1:N Group : Certification */
db.Group.hasMany(db.Certification, { foreignKey: 'group_id'});
db.Certification.belongsTo(db.Group, { foreignKey: 'group_id'});

/* 1:N Certification : CertiImage */
db.Certification.hasMany(db.CertiImage, { foreignKey: 'certi_id'});
db.CertiImage.belongsTo(db.Certification, { foreignKey: 'certi_id'});

/* 1:N Certification : Comment */
db.Certification.hasMany(db.Comment, { foreignKey: 'certi_id'});
db.Comment.belongsTo(db.Certification, { foreignKey: 'certi_id'});

/* 1:N User : Comment */
db.User.hasMany(db.Comment, { foreignKey: 'user_id'});
db.Comment.belongsTo(db.User, { foreignKey: 'user_id'});


/* User : Certification => like */
db.User.belongsToMany(db.Certification, { through: 'Like', as: 'Liked', foreignKey: 'user_id' });
db.Certification.belongsToMany(db.User, { through: 'Like', as: 'Liker', foreignKey: 'certi_id'});

/* User : Group => join */
db.User.belongsToMany(db.Group, { through: 'Join', as: 'Joined', foreignKey: 'user_id' });
db.Group.belongsToMany(db.User, { through: 'Join', as: 'Joiner', foreignKey: 'group_id'});

/* User : Sport => user_sport */
db.User.belongsToMany(db.Sport, { through: 'UserSport', as: 'Chosen', foreignKey : 'user_id'});
db.Sport.belongsToMany(db.User, { through: 'UserSport', as: 'Chooser', foreignKey : 'sport_id'});

/* Group : Sport => group_sport */
db.Group.belongsToMany(db.Sport, { through: 'GroupSport', as: 'Selected', foreignKey : 'group_id'});
db.Sport.belongsToMany(db.Group, { through: 'GroupSport', as: 'Selector', foreignKey : 'sport_id'});

/* Certification : Sport => certi_sport */
db.Certification.belongsToMany(db.Sport, { through: 'CertiSport', as: 'Done', foreignKey : 'certi_id'});
db.Sport.belongsToMany(db.Certification, { through: 'CertiSport', as: 'Doer', foreignKey : 'sport_id'});

module.exports = db;
