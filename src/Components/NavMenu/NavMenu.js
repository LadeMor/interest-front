import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import AccountPage from '../AccountPage/AccountPage';
import Main from '../Main/Main';
import Registration from "../Auth/Registration/Registration";
import Login from "../Auth/Login/Login";
import SearchBar from "../SearchBar/SearchBar";

import HomeIcon from "../../Icons/home_icon.svg";
import UserIcon from "../../Icons/user_icon.svg";

import "./NavMenu.css";
import PostCreate from "../Post/Create/PostCreate";

function NavMenu() {
    return (
        <div className="main_body">
            <Router>
                <div className="nav_bar">
                    <a href="/"><h2>Interest</h2></a>
                    <a href="/"><img src={HomeIcon} alt="HomeIcon" width="40px"/></a>
                    <a href="/account"><img src={UserIcon} alt="UserIcon" width="40px"/></a>
                    <div className="search_bar_block">
                        <SearchBar></SearchBar>
                    </div>
                    <a href="/registration"><h2>Registration</h2></a>
                    <a href="/login"><h2>Login</h2></a>
                </div>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/account" element={<AccountPage/>}/>
                    <Route path="/postcreate" element={<PostCreate/>}/>
                </Routes>
4            </Router>
        </div>
    );
}

export default NavMenu;