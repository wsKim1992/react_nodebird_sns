module.exports = (sequelize,DataTypes)=>{
    const Comment = sequelize.define('Comment',{// MySQL에는 posts 테이블 생성
        //id 가 기본적으로 들어있음
        content:{
            type:DataTypes.TEXT,    
            allowNull:false,
        },
        // UserId:{}
        // PostId:{} 
        // belongsTo관계가 있음 위와같은 column들이 생성됨.
    },{
        charset:'utf8mb4',//utf8mb4 으로 설정해줌으로써 이모티콘도 인식이 될 수가 있다.
        collate:'utf8mb4_general_ci',
    });
    Comment.associate=(db)=>{
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}