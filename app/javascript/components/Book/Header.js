import React from 'react';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';

const Header = (props) => {
  const { name, avg_score } = props.attributes
  return(
    <Col md="4">
      <div className="container mt-4">
        <Navbar bg="dark" expand="lg"><p className="text-light">Reviews</p></Navbar>
        <ListGroup as="ul">
        <ListGroup.Item as="li">{name}</ListGroup.Item>
        <ListGroup.Item as="li">{avg_score}</ListGroup.Item>
        </ListGroup>
      </div>
    </Col>
  )
}

export default Header
