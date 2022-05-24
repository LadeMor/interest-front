import React, {useEffect, useState} from "react";
import axios from "axios";
import data from "../../data.json";
import PostPreview from "../Post/Preview/PostPreview";
import "./Main.css";

function Main() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://localhost:5001/api/Post',
            );
            const json = await res.json();
            setPosts(json);
        };
        fetchData();
    });

    return(
        <div>
            <PostPreview postPreview={posts}/>
        </div>
    );
}

export default Main;