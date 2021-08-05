import React, { useContext, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import {BlogContext} from '../Context/BlogContext'
import Forms from './Forms'


function Blogs({post}) {

    const {deleteHandler} =  useContext(BlogContext);

     const [edit, setEdit] = useState(false);


    return (
      <Col sm={6}>
          <Card key={post.id}>  
       {edit ? 
       <>
       <Forms post={post} setEdit={setEdit}/>
       </>

       :

       <>
       
          <Card.Body>
          <Card.Title>{post.id}</Card.Title>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary" onClick={() =>setEdit(true)}>EDIT</Button>
            <Button variant="danger" onClick={() => deleteHandler(post.id)}>DELETE</Button>
          </Card.Body>
      

       </>
       
    
    
    
    
    
    } 
      </Card>
      </Col>
    );
}

export default Blogs
