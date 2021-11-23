module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('User',{// MySQL에는 users 테이블 생성
        //id 가 기본적으로 들어있음
        email:{
            type:DataTypes.STRING(30),
            allowNull:false,
            unique:true,
        },
        nickname:{
            type:DataTypes.STRING(30),
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
    },{
        charset:'utf8',
        collate:'utf8_general_ci',
    });
    User.associate=(db)=>{
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post,{through:'Like'});
        //n:n 관계에선 이렇게 설정 
        //through 를 통해 관계테이블 설정함.
    };
    return User;
}