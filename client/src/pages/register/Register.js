import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
export default function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            });
            // 有拿到回傳資料表示註冊成功，就導向登入頁面
            res.data && window.location.replace("/login");
        }catch(err){
            // 註冊失敗 error = true
            setError(true);
        }
    };
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Enter your username"
                    id="username"
                    autoFocus
                    onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    placeholder="Enter your email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="password"
                    id="passsword"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
            {   /* 註冊失敗就顯示錯誤文字提醒 */
                error && <span style={{color:"red",marginTop:"10px",fontWeight:"bold"}}>Oops...Something Wrong!</span>
            }          
        </div>
    )
}
