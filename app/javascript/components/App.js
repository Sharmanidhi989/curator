import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Book from './Book/Book';
import Books from './Books/Books';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
  <Container>
    <Switch>
      <Route exact path="/" component={Books}/>
      <Route exact path="/books/:slug" component={Book}/>
    </Switch>
  </Container>)
}

export default App;
