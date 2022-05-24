import React from "react";

import Post from "../Image/Post";
import {Container, Row, Col} from "react-bootstrap";

import "./PostPreview.css";

const PostPreview = ({postPreview}) => {
    return(
        <div className="main_preview">
            <Container>
                <Row>
                    {
                        postPreview.map(post => {
                            return(
                                <Col>
                                    <Post post={post}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
};

export default PostPreview;