import React, { useContext, useState } from 'react'
import {BlogContext} from '../Context/BlogContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Card({post,deleteHandler}) {


    const {edit ,setEdit ,editHandler } =  useContext(BlogContext);

    const [edit, setEdit] = useState(false);




    const updateHandler = ( ) => {
      console.log("dsfsdfs")
    }



    if  (edit){
      return (

        
       
        <Card>
        <Card.Header>{post.id}</Card.Header>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
           {post.body}
          </Card.Text>
          {/* <Button variant="primary" onClick={(id)=> editHandler(post.id)}>Edit</Button> */}
          <Button variant="primary" onClick={updateHandler}>Updata</Button>
          <Button variant="danger" onClick={(id)=> deleteHandler(post.id)} >Delete</Button>
        </Card.Body>
      </Card>
    )

    }else {
            <p>edit karna hai ji</p>

    }

    
    
}

export default Cards
