import React, { useState, useEffect, Fragment } from 'react';
import Header from "./Header";
import ReviewForm from './ReviewForm';
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

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const book_id = book.data.id

    axios.post(`/api/v1/reviews`, {review, book_id})
    .then(resp => {
      const included = [...book.included, resp.data.data]
      setBook({...book, included})
      setReview({title: '', description: '', score: 0})
    })
    .catch(resp => console.log(resp))
  }

  const handleChange = (e) => {
    e.preventDefault()
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
  }

  const setRating = (score, e) => {
    e.preventDefault()
    setReview({...review, score})
  }

  return (
    <Row className="container">
      {
        loaded &&
        <Fragment>
          <Header attributes={book.data.attributes}/>
          <Col md="8">
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={book.data.attributes}
              review={review}
            />
          </Col>
        </Fragment>
      }
    </Row>
  )
}
  
export default Book
