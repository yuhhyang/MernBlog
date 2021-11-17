import './register.css'

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter your username" id="username" autoFocus/>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter your email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" id="passsword" />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>            
        </div>
    )
}
