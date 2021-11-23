module.exports = (sequelize,DataTypes)=>{
    const Image = sequelize.define('Image',{// MySQL에는 posts 테이블 생성
        //id 가 기본적으로 들어있음
        src:{
            type:DataTypes.STRING(200),    
            allowNull:false,
        },
    },{
        charset:'utf8',//utf8mb4 으로 설정해줌으로써 이모티콘도 인식이 될 수가 있다.
        collate:'utf8_general_ci',
    });
    Image.associate=(db)=>{
        db.Image.belongsTo(db.Post);
    };
    return Image;
}