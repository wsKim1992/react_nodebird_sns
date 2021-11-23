const express = require('express');
const app = express();
const postRouter = require('./routes/post');

app.get('/',(req,res)=>{
    res.send('hello express');
})

app.use('/post',postRouter);

app.listen(3065,()=>{
    console.log('서버 실행중..');
});