import './singlePost.css';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://picsum.photos/940/650?random=1" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem, ipsum dolor sit amet 
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aperiam maxime porro eos, illo non tenetur eaque repellat minus? Iure cumque fuga et quisquam esse est natus ducimus repudiandae nemo.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate laborum illum illo, veritatis soluta repellendus, vel quia quis id nulla asperiores dolore enim vero saepe sapiente iure corrupti facilis mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugiat placeat amet neque impedit nesciunt dolores animi natus quia nisi accusamus optio incidunt, necessitatibus aperiam molestiae illo nulla, nobis pariatur!</p>
            </div>
        </div>
    )
}
