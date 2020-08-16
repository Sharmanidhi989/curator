import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Card, Col} from 'react-bootstrap';

const BookGrid = (props) => {
  return(
    <Col md="3" className="m-2">
      <Card>
        <Card.Body className="text-center">
          <h5>{props.attributes.name}</h5>
          <div>{props.attributes.avg_score}</div>
          <div>
            <Link to={`books/${props.attributes.slug}`} className="btn btn-sm btn-secondary  mt-1">View Book</Link>
          </div>
        </Card.Body> 
      </Card>
    </Col>
  )
}

export default BookGrid
