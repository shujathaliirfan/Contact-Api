import React, { useContext ,useState } from 'react'
import {BlogContext} from '../Context/BlogContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
// import Forms from './Forms'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

function Cards({post ,id}) {

  const {editHandler} =  useContext(BlogContext);


    const { deleteHandler } =  useContext(BlogContext);
    const [edit, setEdit] = useState(true);

    const [editId, seteditId] = useState(post.id);
    const [editTitle, seteditTitle] = useState(post.title);
    const [editBody, seteditBody] = useState(post.body);

    console.log(editTitle + "sd")



   


    const updateHandler = ( ) => {
      console.log("dsfsdfs")
      setEdit(v => !v);
    }

    const editToggle = () => {
      setEdit(v => !v);
    }





    if (edit) {
      return (
        <>
                
               
               <Col xs={6} md={4}>
                <Card key={id} >
                <Card.Header>{post.id}</Card.Header>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                   {post.body}
                  </Card.Text>
                  <Button variant="primary" onClick={editToggle}>Edit</Button>
                  {/* <Link to={`/edit/${post.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link> */}
                  <Button variant="danger" onClick={(id)=> deleteHandler(post.id)} >Delete</Button>
                </Card.Body>
              </Card>
              </Col>
              
              
        
        
              </>
            )

    }else {
      
      return (
        <>
                
               
               <Col xs={6} md={4}>
               <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>id</Form.Label>
    <Form.Control type="text" value={editId} 
     onChange ={e => seteditId(e.target.value)}
     name="id" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>title</Form.Label>
    <Form.Control type="text" value={editTitle} 
    
    onChange ={e => seteditTitle(e.target.value)}
    name="title" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>body</Form.Label>
    <Form.Control as="textarea" rows={3}  value={editBody} />
    <Button type="submit" variant="primary"  name="body" onChange ={e => seteditBody(e.target.value)} onClick={(post) => editHandler(post)}>UPDATE
    </Button>                 
   <Button type="submit" variant="danger" onClick={(id)=> deleteHandler(post.id)} >Delete</Button>
  </Form.Group>

</Form>


               </Col>
        
        
              </>
            )
    
      }
}

export default Cards
