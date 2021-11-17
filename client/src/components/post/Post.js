import React from 'react'
import './post.css'
export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        Music
                    </span>
                    <span className="postCat">
                        Life
                    </span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nobis facilis sapiente veritatis consequuntur saepe ipsa, eligendi odit adipisci cupiditate molestias. Inventore, quam delectus! Vel nobis dicta cumque laboriosam ducimus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nobis facilis sapiente veritatis consequuntur saepe ipsa, eligendi odit adipisci cupiditate molestias. Inventore, quam delectus! Vel nobis dicta cumque laboriosam ducimus?
            </p>
        </div>
    )
}
