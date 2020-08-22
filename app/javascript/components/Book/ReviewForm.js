import React,{ Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return(
      <Fragment key={index}>
        <input type="radio" value={score} name="rating" checked={props.review.score == score} onChange={props.setRating.bind(this, score)} id={`rating-${score}`}/>
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return( 
    <Container className="m-4 bg-dark text-light p-4">
      <div>Have you read {props.attributes.name}? Share your review here!</div>
      <Form className="m-2" onSubmit={props.handleSubmit}>
        <Form.Group controlId="title">
          <input onChange={props.handleChange} type="text" name="title" placeholder="Review Title" value={props.review.title} className="form-control"/>
        </Form.Group>

        <Form.Group controlId="description">
          <input onChange={props.handleChange} type="text" name="description" placeholder="Review Description" value={props.review.description} className="form-control"/>
        </Form.Group>

        <Form.Group controlId="score" className="rating-container">
          <Form.Label>Rate this book.</Form.Label>
          <Form.Text className="text-light rating-box">
            {ratingOptions}
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
