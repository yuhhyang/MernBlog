import './topbar.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useContext } from 'react';
export default function TopBar() {
    const { user } = useContext(Context);
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img 
                    className="topImg"
                    src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt=""/>
                    )
                    : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">Login</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">Register</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
