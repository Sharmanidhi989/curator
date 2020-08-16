import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookGrid from './BookGrid';
import Row from 'react-bootstrap/Row'

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('/api/v1/books.json') // get data from the api
      .then(response => { setBooks(response.data.data) }) // update the state
      .catch(response => console.log(response) )
  }, [books.length])

  const grid = books.map( item => {
    return (<BookGrid
      key={item.attributes.name}
      attributes={item.attributes}
    />)
  })

  return (
    <div>
      <div class="text-center mb-4">
        <h1>OpenBooks</h1>
        <div>Curates the critical and honest reviews of the best books</div>
      </div>
      <Row className="justify-content-center">
        {grid}
      </Row>
    </div>
  )
}

export default Books
