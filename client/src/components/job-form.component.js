import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// position: 
// primaryTag: 
// company: 
// location: 
// salary: 
// description: 
// url:

function JobForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  }

    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicText">
        <Form.Label>Position:</Form.Label>
        <Form.Control type="text" placeholder="Position:" />
      </Form.Group>
      <Form.Group controlId="formBasicNumber">
        <Form.Label>Salary:</Form.Label>
        <Form.Control type="number" placeholder="70000" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
}

export default JobForm;