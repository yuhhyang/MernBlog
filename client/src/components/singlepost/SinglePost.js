import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import axios from 'axios';
import './singlePost.css';
export default function SinglePost() {
    // 抓 path
    const location = useLocation();
    const path = location.pathname.split("/")[2]; // /post/619cbd94013f5bb9ae22f5d6
    const [post, setPost] = useState({});
    // 切換的文章 id 改變，url 也改變
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/post/${path}`);
            setPost(res.data);
        }
        getPost();
    }, [path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={post.photo} alt="" className="singlePostImg" />
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDescription">{post.description}</p>
            </div>
        </div>
    )
}