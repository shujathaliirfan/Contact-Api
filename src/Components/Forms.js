import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Forms({setEdit , deleteHandler,post}) {



  const updateHandler = ( ) => {
    console.log("dsfsdfs")
    setEdit(false)
  }


    return (
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>id</Form.Label>
    <Form.Control type="text" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>title</Form.Label>
    <Form.Control type="text" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>body</Form.Label>
    <Form.Control as="textarea" rows={3} />
    <Button type="submit" variant="primary" onClick={updateHandler}>uPDATE
    </Button>                 
   <Button type="submit" variant="danger" onClick={(id)=> deleteHandler(post.id)} >Delete</Button>
  </Form.Group>

</Form>
        </div>
    )
}

export default Form
