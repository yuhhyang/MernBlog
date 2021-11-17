import './login.css';
import { Link } from 'react-router-dom';
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
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>            
        </div>
    )
}
