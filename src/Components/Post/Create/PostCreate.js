import React, {useEffect, useRef, useState} from "react";
import {Form, Image, Button} from "react-bootstrap";
import "./PostCreate.css";
import photo from "../../../Icons/icon-landscape.png";

function PostCreate(){

    const [ userInput, setUserInput ] = useState('');

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");

    const [preview, setPreview] = useState("");
    const fileInputRef = useRef("");

    var id;
    var rating;

    const handleSubmit = e =>{
        e.preventDefault();

        const data = {
            id,
            title,
            image,
            description,
            author,
            rating
        }
        const requestOptions = {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };
        fetch("https://localhost:5001/api/Post", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res))
    };

    const onChangePicture = (event) => {
        const file = event.target.files[0];
         if(file && file.type.substr(0,5) === "image"){
             setImage(file);
         }else {
             setImage(null);
         }
     }

     useEffect(() => {
         if(image){
             const reader = new FileReader();
             reader.onloadend = () =>{
                 setPreview(reader.result);
             }
             reader.readAsDataURL(image);
         }else{setPreview(photo);
         }
     }, [image]);

    return(
        <div className="main_post">
            <h1>Create post</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter post title" value={title}
                                  onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Label>Image</Form.Label>
                <div className="img_placeholder_post">
                    <Image src={preview} alt="photo_icon" rounded/>
                </div>
                {/*<Form.Group controlId="formFile" className="mb-3">*/}
                {/*    <Form.Control type="file" accept="image/*" ref={fileInputRef}*/}
                {/*                  onChange={onChangePicture} />*/}
                {/*</Form.Group>*/}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Image" value={image}
                                  onChange={(e) => setImage(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={description}
                                  onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Author" value={author}
                                  onChange={(e) => setAuthor(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Create
                </Button>
            </Form>
        </div>
    )
}

export default PostCreate;