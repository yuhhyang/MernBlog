import React from 'react';
import './post.css';
export default function Post({ post }) {
    return (
        // 從資料庫抓文章分類,文章標題,圖片,發文時間 and 文章內容
        <div className="post">
            {/*文章有照片才會顯示照片*/
            post.photo && (
                <img className="postImg" src={post.photo} alt="" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map(category => (
                        <span className="postCat">{category.name}</span>
                    ))}
                </div>
                <span className="postTitle">
                    {post.title}
                </span>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDescription">
                {post.description}
            </p>
        </div>
    )
}
