module.exports = (sequelize,DataTypes)=>{
    const Post = sequelize.define('Post',{// MySQL에는 posts 테이블 생성
        //id 가 기본적으로 들어있음
        content:{
            type:DataTypes.TEXT,    
            allowNull:false,
        },
    },{
        charset:'utf8mb4',//utf8mb4 으로 설정해줌으로써 이모티콘도 인식이 될 수가 있다.
        collate:'utf8mb4_general_ci',
    });
    Post.associate=(db)=>{
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User,{through:'Like'});
    };
    return Post;
}