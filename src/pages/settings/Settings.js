import "./settings.css";
import Sidebar from '../../components/sidebar/Sidebar';
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePic">
                        <img src="https://picsum.photos/940/650?random" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsProfilePicIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Helen" id="username"></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="qjklf@gmail.com" id="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
