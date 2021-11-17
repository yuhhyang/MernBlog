import './login.css';

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter your email" id="email" autoFocus/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" id="passsword" />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>            
        </div>
    )
}
