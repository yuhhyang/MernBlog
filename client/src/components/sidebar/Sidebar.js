import './sidebar.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Sidebar() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            const res = await axios.get("/categories");
            setCategories(res.data);
        }
        getCategories();
    },[]);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img src="https://picsum.photos/300/300?random=1" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi officia repudiandae ullam modi voluptates reiciendis vitae possimus hic repellendus at sequi provident maxime eaque dolorum veniam velit cumque, officiis ea?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {
                        categories.map(category => (
                            <Link to={`/?cat=${category.name}`} className="link">
                                <li className="sidebarListItem">{category.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
