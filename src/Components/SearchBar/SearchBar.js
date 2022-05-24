import React from "react";
import {Form, Image} from "react-bootstrap";
import "./SearchBar.css";
import search_icon from "../../Icons/search-icon.png";

function SearchBar(){
    return(
        <div className="search_bar">
            <Form>
                <Form.Group className="mb-3" id="search_input" controlId="formBasicEmail">
                    <Form.Control type="text"/>
                    <Image src={search_icon}/>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchBar;