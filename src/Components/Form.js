import React from 'react'
import Form from 'react-bootstrap/Form'

function Form() {
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
  </Form.Group>
</Form>
        </div>
    )
}

export default Form
