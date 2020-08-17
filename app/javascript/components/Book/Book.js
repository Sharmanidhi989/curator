import React, { useState, useEffect } from 'react';
import Header from "./Header";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Book = (props) => {
  const [book, setBook] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/books/${slug}`
    axios.get(url)
    .then(response => { 
      setBook(response.data)
      setLoaded(true)
    })
    .catch(response => console.log(response))
  }, [])

  return (
    <Row className="container">
      {
        loaded &&
        <Header attributes={book.data.attributes}/>
      }
      <Col md="8">
        <div className="">review form</div>
      </Col>
    </Row>
  )
}
  
export default Book
