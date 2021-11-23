import {Card, Button, Popover,Avatar,List,Comment } from "antd";
import React,{useState,useCallback} from "react";
import { RetweetOutlined,HeartTwoTone,HeartOutlined,MessageOutlined,EllipsisOutlined } from "@ant-design/icons";
import ButtonGroup from "antd/lib/button/button-group";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import { REMOVE_POST_REQUEST } from "../reducers/post";
import FollowButton from "./FollowButton";

const PostCard=({post})=>{
    const dispatch= useDispatch();
    const [liked,setLiked] = useState(false);
    const [commentFormOpened,setCommentFormOpened] = useState(false);
    const {me}=useSelector((state)=>state.user);   
    const {removePostLoading}=useSelector((state)=>state.post);   
    const id = me?.id;
    const onToggleLike=useCallback(() => {
        setLiked((prev)=>!prev);
    },[]);
    const onToggleComment = useCallback(()=>{
        setCommentFormOpened((prev)=>!prev);
    },[])
    const onRemovePost= useCallback(() => {
        dispatch({type:REMOVE_POST_REQUEST,data:post.id})
    },[])
    return(
        <div style={{marginBottom:20}}>
            <Card
                cover={post.Images[0]&&<PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined key = "retweet"/>,
                    liked
                        ?<HeartTwoTone towToneColor="#eb2f96" onClick={onToggleLike} key ="heart"/>
                        :<HeartOutlined key ="heart" onClick={onToggleLike}/>
                    ,
                    <MessageOutlined onClick={onToggleComment} key = "comment"/>,
                    <Popover key="more" content={(
                        <ButtonGroup>
                            {id&& post.User.id===id?(
                                <>
                                    <Button>수정</Button>
                                    <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                                </>
                            ):
                            <Button>신고</Button>}
                        </ButtonGroup>
                    )}>
                        <EllipsisOutlined/>
                    </Popover>
                ]}
                extra={id&&<FollowButton post={post}/>}
            >   
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content}/>}
                />
                {/* <Image/>
                <Content/> */}
            </Card>
            {commentFormOpened&&
            (<div>
                <CommentForm post={post}/>
                <List
                    header = {`${post.Comments.length} 개의 댓글`}
                    itemLayout="horizontal"
                    dataSource= {post.Comments}
                    renderItem={(item)=>(
                        <li>
                            <Comment
                                author={item.User.nickname}
                                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                content={item.content}
                            />
                        </li>
                    )}
                />
            </div>)}
            {/* <CommentForm/>
            <Comments/> */}
        </div>
    )
}

PostCard.propTypes = {
    post:PropTypes.shape({
        id:PropTypes.number || PropTypes.string,
        User:PropTypes.object,
        content:PropTypes.string,
        createdAt:PropTypes.object,
        Comments:PropTypes.arrayOf(PropTypes.object),
        Images:PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}

export default PostCard;
