

import React, { useState, useContext, useEffect } from 'react';
import {BlogContext} from '../Context/BlogContext'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link, useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';

function EditUser(props) {


    const {posts ,editHandler} =  useContext(BlogContext);

    const [selectedUser, setSelectedUser] = useState({
        id: '',
        title: '',
        body:''
      })

    const history = useHistory();
    const currentUserId = props.match.params.id;
  
    useEffect(() => {
      const userId = currentUserId;
      const User = posts.find(user => user.id === userId);
      console.log(User);
      setSelectedUser(User);
      console.log(selectedUser)
    }, [currentUserId,posts])

    
  
    const onChange = (e) => {
      setSelectedUser({ ...selectedUser ,
        [e.target.name]: e.target.value
    })
    }
  
    console.log(selectedUser)

    
    const onSubmit = (e) => {
      e.preventDefault();
      editHandler(selectedUser);
      history.push("/")
    }




    return (
        <Container className="pt-4">
        <Form onSubmit={onSubmit}>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Id</Form.Label>
    <Form.Control type="text" name="id" onChange={onChange}  placeholder="id" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name="title" onChange={onChange}  placeholder="name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" name="body" onChange={onChange} rows={3} placeholder="description"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
      )
}

export default EditUser;





