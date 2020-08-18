import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ReviewForm = (props) => {
  return(
    <Container className="m-4 bg-dark text-light p-4">
      <div>Have you read {props.attributes.name}? Share your review here!</div>
      <Form className="m-2" onSubmit={props.handleSubmit}>
        <Form.Group controlId="title">
          <Form.Control onChange={props.handleChange} values={props.review.title} name="title" type="text" placeholder="Review Title" />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Control onChange={props.handleChange} values={props.review.description} name="description" type="text" placeholder="Review Description" />
        </Form.Group>

        <Form.Group controlId="score">
          <Form.Label>Rate this book.</Form.Label>
          {/* <Form.Control type="" placeholder="Password" /> */}
          <Form.Text className="text-light">
            star ratings here
          </Form.Text>
        </Form.Group>
        <Button variant="light" size="sm" block type="submit">
          <b>Submit Your Review</b>
        </Button>
      </Form>
    </Container>
  )
}

export default ReviewForm
