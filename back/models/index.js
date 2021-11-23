const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};
//sequelize는 mysql2 를 사용하는데
//이렇게 생성자를 정의하면서 mysql2 에 연결정보 (db 계정정보)를 넘겨주게 된다.
//mysql2 모듈은 node와 database 를 연동해주는 모듈이다.
//연결성공시 sequelize 에 연결정보가 담김!
const sequelize = new Sequelize(config.database,config.username,config.password,config);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
