import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

const SubmitRequest = () => {
  const [formData, setFormData] = useState({
    prompt: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowLoader(true)
      console.log(formData)

      const response = await axios.post('http://127.0.0.1:8000/give-coursework/', formData);

      console.log('POST Request Response:', response.data);
      

      setResponseMessage(response.data);
      setShowLoader(false)
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

  return (<div className='mt-5'>
    <Container>
      <Card style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 1)', }}>
        <Card.Header style={{
          backgroundColor: 'rgba(33,37,41)', // Background color
          color: 'white', // Text color
          textAlign: 'center', // Center the text
          padding: '10px', // Padding for spacing
          fontSize: '24px', // Font size
        }}>
          <h2>Enter Prompt</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder='Enter your prompt here...'
                style={{ border: '2px solid #ccc', }}
                as="textarea"
                name="prompt"
                rows={3}
                required
                value={formData.prompt}
                onChange={handleChange}
              />
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </Form>
          <div className="mt-3">
            <p>{responseMessage}</p>
          </div>
        </Card.Body>
      </Card>
    {
      showLoader && <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span class="loader"></span>
      </div>
    }
    </Container>
  </div>);
};

export default SubmitRequest;
