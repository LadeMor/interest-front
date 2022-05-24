import React, {useState} from "react";

import Card from 'react-bootstrap/Card';

import "./Post.css";
import {Button} from "react-bootstrap";

const Post = ({post}) => {

    const [color, setColor] = useState("");
    const [count, setCount] = useState(post.rating);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

  return(
      <div className="image_block">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{post.author}</Card.Subtitle>
                  <Card.Text>
                      {post.description}
                  </Card.Text>
                  <Card.Text>
                      {count}
                      <Button className="button_plus" onClick={handleIncrement}>+</Button>
                      <Button className="button_minus" onClick={handleDecrement}>-</Button>
                  </Card.Text>
              </Card.Body>
          </Card>
      </div>
  )
};

export default Post;