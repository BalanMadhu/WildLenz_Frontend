import React, { useState } from 'react';
import { Modal,Row, Col, Alert, Button, Form } from 'react-bootstrap';
import data from './Data.json';
import CustomNavbar from './CustomNavbar';

export function TouristPlaces (){
  const [places] = useState(data);
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission logic (replace with actual logic)
    setTimeout(() => {
      handleClose(); // Close the modal after submission
      setSubmitted(true); // Set submitted state to true
    }, 1000); // Simulate async operation (remove in real application)
  };
  

  return (
    <>
    <CustomNavbar />
      <div className='container'> 
        <div className='row'>
          {places.map((place, index) => (
            <div key={index} className='col-lg-4 col-md-6 mb-4'>
              <div className="showcase">
                <a href="#" className="travel-card">
                  <div className="image">
                    <img src={`https://images.unsplash.com/${place.imageQuery}`} alt={place.title} />
                  </div>
                  <div className="content">
                    <div>
                      <label className="category">{place.category}</label>
                      <h1 className="topic">{place.title}</h1>
                      <div className="recommendation d-flex align-items-center justify-content-between">
                        <div className="score">
                          <span>{place.rating}</span>
                          <i className="material-icons">star</i>
                        </div>
                        <div className="comment">({place.reviews} Reviews)</div> 
                        <button className='apply_btn' onClick={handleShow}>Apply</button>
                      </div>
                    </div>
                    <div className="price">
                      <div className="discount-info">{place.discount}</div>
                      <div className="original-price">INR {place.price}</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal show={show}
        onHide={handleClose}
        size="xl" // Set modal size to extra large
        centered // Center the modal vertically
        backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Apply Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className='py-2'>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Form.Group>
          </Col>
          <Col className='py-2'>
            <Form.Group controlId="mobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your mobile number" required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className='py-2'>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your city" required />
            </Form.Group>
          </Col>
          <Col className='py-2'>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter your state" required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className='py-2'>
            <Form.Group controlId="persons">
              <Form.Label>Number of Persons</Form.Label>
              <Form.Control type="number" placeholder="Enter number of persons" required />
            </Form.Group>
          </Col>
          <Col className='py-2'>
            <Form.Group controlId="dates">
              <Form.Label>From Date - To Date</Form.Label>
              <Form.Control type="text" placeholder="Enter dates" required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className='py-2'>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" required />
            </Form.Group>
          </Col>
          <Col className='py-2'>
            <Form.Group controlId="status">
              <Form.Label>Marital Status</Form.Label>
              <Form.Control as="select" required>
                <option>Married</option>
                <option>Unmarried</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="foodIncluded">
          <Form.Check type="checkbox" label="Includes Food" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Modal.Body>
      
      </Modal>
      {submitted && (
        <Alert variant="success">
          Your Application Successfully submitted. Our team will contact you as soon as possible.
        </Alert>
      )}
    </>
  );
};

export default TouristPlaces;
