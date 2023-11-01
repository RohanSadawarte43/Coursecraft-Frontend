import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

const SubmitRequest = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData)
      // Replace with your API endpoint
      const response = await axios.get('http://127.0.0.1:8000/courses/');

      console.log('POST Request Response:', response.data);

      // Set the response message to display
      setResponseMessage(`Response: ${response.data}`);
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, e.g., show an error message to the user.
      setResponseMessage('An error occurred.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Card>
        <Card.Header>
          <h2>Submit a Post</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                name="body"
                rows={4}
                required
                value={formData.body}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
          <div className="mt-3">
            <p>{responseMessage}</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SubmitRequest;
