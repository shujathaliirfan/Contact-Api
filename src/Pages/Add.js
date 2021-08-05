import React, { useState ,useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {BlogContext} from '../Context/BlogContext'
import { useHistory } from "react-router-dom";






function Add() {




  const {posts , setPosts} =  useContext(BlogContext);

  let history = useHistory();
     
    
        const [formData, setformData] = useState({
          id:posts.length +1,
          title:"",
          body:""
        })
    
    
      const onChangeHandler = (e) => {
        e.preventDefault();
        const {name , value} = e.target;
    
        setformData({
          ...formData,
          [name] : value
        })
    
        
      }

  
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setPosts([...posts,
        {
          id:formData.id,
          title:formData.title,
          body:formData.body
        }
      ])   
          history.push('/');
     
      }


    return (
      <div className="p-4">
        
        <Form onSubmit={handleSubmit}>

<Form.Group className="mb-3 ">
<Form.Label>Id</Form.Label>
<Form.Control type="text" name="id" value ={formData.id} onChange={onChangeHandler}  placeholder="id" />
</Form.Group>

<Form.Group className="mb-3" >
<Form.Label>Title</Form.Label>
<Form.Control type="text" name="title" value ={formData.title} onChange={onChangeHandler}  placeholder="name" />
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Description</Form.Label>
<Form.Control as="textarea" name="body" value ={formData.body} onChange={onChangeHandler} rows={3} placeholder="description"/>
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>


      </div>
    );
}

export default Add
