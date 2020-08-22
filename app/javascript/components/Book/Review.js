import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const Review = (props) => {
  const {score, title, description} = props.attributes
  return(
    <Fragment>
      <Card>
        <div>
          <ul>
            <li>{title}</li>
            <li>{description}</li>
            <li>{score}</li>
          </ul>
        </div>
      </Card>
    </Fragment>
    
  )
}

export default Review
