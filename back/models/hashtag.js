module.exports = (sequelize,DataTypes)=>{
    const Hashtag = sequelize.define('Hashtag',{// MySQL에는 posts 테이블 생성
        //id 가 기본적으로 들어있음
        name:{
            type:DataTypes.STRING(20),    
            allowNull:false,
        },
    },{
        charset:'utf8mb4',//utf8mb4 으로 설정해줌으로써 이모티콘도 인식이 될 수가 있다.
        collate:'utf8mb4_general_ci',
    });
    Hashtag.associate=(db)=>{
        db.Hashtag.belongsToMany(db.Post);
    };
    return Hashtag;
}