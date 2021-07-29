import React, { useContext } from 'react'
import {BlogContext} from '../Context/BlogContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Card({post,deleteHandler}) {


    const {edit ,setEdit ,editHandler } =  useContext(BlogContext);

    
    return (

        
       
        <Card>
        <Card.Header>{post.id}</Card.Header>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
           {post.body}
          </Card.Text>
          <Button variant="primary" onClick={(id)=> editHandler(post.id)}>Edit</Button>
          <Button variant="danger" onClick={(id)=> deleteHandler(post.id)} >Delete</Button>
        </Card.Body>
      </Card>
    )
}

export default Cards
