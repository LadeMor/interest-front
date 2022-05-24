import React, {useState} from 'react';
import {
    Image,
    Button, Nav
} from 'react-bootstrap';
import "./AccountPage.css";
import myData from "../../myData.json";
import PostPreview from "../Post/Preview/PostPreview";



const AccountPage = () => {

    const [list, setList] = useState(myData);

    return(
        <div className="user_info">
            <div className="user_icon">
                <Image id="user_icon" src="https://i.pinimg.com/280x280_RS/dd/19/b8/dd19b8956ab2067a6abfefdea25a7eb1.jpg" alt="user" width="100px" height="100px" roundedCircle />
            </div>
            <h3>LadeMor</h3>
            <p>Web Developer</p>
            <Nav.Link href="/postcreate">
                <Button variant="primary">Create post +</Button>
            </Nav.Link>
            <div className="followers_info">
                <div>
                    <h4>434K</h4><small>Followers</small>
                </div>
                <div>
                    <h4>5454</h4><small>Following</small>
                </div>
            </div>
            <h1>My posts</h1>

            <div>
                <PostPreview postPreview={list}/>
            </div>
            );
        </div>
    );
}

export default AccountPage;