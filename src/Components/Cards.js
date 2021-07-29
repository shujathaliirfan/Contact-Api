import React, { useContext } from 'react'
import {BlogContext} from '../Context/BlogContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Cards({post,deleteHandler}) {


    const {edit ,setEdit ,editHandler,key } =  useContext(BlogContext);
    console.log(edit)

   
    
    return (
<>
        {!edit ? 
       
        <Card>
        <Card.Header>{post.id}</Card.Header>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
           {post.body}
          </Card.Text>
          <Button variant="primary" onClick={()=> setEdit(true)}>Edit</Button>
          <Button variant="danger" onClick={(id)=> deleteHandler(post.id)} >Delete</Button>
        </Card.Body>
      </Card>
      : "fdgfdg"

    

    }
      </>
    )
}

export default Cards
