import React, {useEffect, useRef, useState} from "react";
import "./Registration.css";
import {
    Form,
    Button, Image} from 'react-bootstrap';

import photo from "../../../Icons/icon-landscape.png";

function Registration(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [image, setImage] = useState("");
    const [preview, setPreview] = useState("");
    const fileInputRef = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = [
            {
                name: name,
                email: email,
                password: password,
                image:preview
            }
        ]
        console.log(JSON.stringify(data))
    }

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
        }else{
            setPreview(photo);
        }
    }, [image]);

    return(
        <div className="main_register">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Create user name" value={name}
                                  onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email}
                                  onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Profile pic</Form.Label>
                    <Form.Control type="file" accept="image/*" ref={fileInputRef}
                                  onChange={onChangePicture} />
                </Form.Group>
                <div className="img_placeholder">
                    <Image src={preview} alt="photo_icon" width="70px" height="70px" rounded/>
                </div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password}
                                  onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Registration;