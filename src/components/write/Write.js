import './write.css';

export default function Write() {
    return (
        <div className="write">
            <img src="https://picsum.photos/940/650?random=1" alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display:"none" }}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus/>
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" placeholder="Write Something..." className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Post</button>
            </form>
        </div>
    )
}
